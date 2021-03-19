const Test = require('../../models/test')
const AuthMiddleware = require('../../Middleware/Auth.middleware')
const ImageUpload = require('../../Middleware/Image.upload')




module.exports = function (router) {

    router.get('/test/:id', async function (req, res) {
        console.log(req.params['id'])
        await Test.findById({ _id: req.params['id'] }).exec()
            .then(docs => res.status(200)
                .json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })
    router.post('/test/create', AuthMiddleware.isAdminLoggedIn, ImageUpload.single('image'), async function (req, res) {
        console.log(req.file);
        console.log(req.body)
        // query for unique test name with category

        const testFind = await Test.findOne({ $and: [{ testname: req.body.testname }, { category: req.body.category }] })
        console.log(testFind)
        if (testFind) {
            res.status(404)
            res.json({
                message: 'Test Name already exists, Create with a new Test type'
            })
            return
        } else {

            const { testname, testtype, price, short_description, description, category } = req.body;
            let test = {}
            test.testname = testname
            test.testtype = testtype
            test.short_description = short_description
            test.description = description
            test.category = category
            test.price = price
            test.image = req.file.path
            let newTest = new Test(test)
            console.log(newTest)
            try {
                await newTest.save()
                res.status(200).json({ message: 'new test is created in Database', newTest: newTest })
            } catch (e) {
                res.status(500).json('unable to insert the new test')
            }
        }

    })




    router.get('/tests', function (req, res) {

        Test.find({}).exec()
            .then(docs =>
                res.status(200).json({
                    message: 'list of tests',
                    tests: docs
                }))
            .catch(err => res.status(500)
                .json({

                    message: 'Error finding user',
                    error: err
                }))
    })


    router.put('/test/update/:id', AuthMiddleware.isAdminLoggedIn, ImageUpload.single('image'), async function (req, res) {
        console.log(req.file)
        let qry = { _id: req.params.id }
        let doc = {
            testname: req.body.testname,
            testtype: req.body.testtype,
            category: req.body.category,
            short_description: req.body.short_description,
            description: req.body.description,
            price: req.body.price,
            image: req.file.path

        }

        await Test.findByIdAndUpdate(qry, doc, function (err, newResp) {
            if (err) return console.log(err)
            console.log(newResp)
            res.status(200).json({
                message: 'test details has been updated',
                testDetailsBeforeupdate: newResp,
                updatedTest: {
                    _id: req.params.id,
                    updatedTestInfo: doc
                }

            })
        })

    })
    router.delete('/test/:id', AuthMiddleware.isAdminLoggedIn, async function (req, res) {
        await Test.findByIdAndDelete(req.params.id).exec()
            .then(docs => res.status(200)
                .json({
                    message: "Test is deleted",
                    test: docs
                }))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })
}