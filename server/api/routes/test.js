const Test = require('../../models/test')

module.exports = function (router) {
    router.get('/test/:id', async function (req, res) {
        console.log(req.params['id'])
        await Test.findById(req.params['id']).exec()
            .then(docs => res.status(200)
                .json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })
    router.post('/test', async function (req, res) {
        const { testName, description, price } = req.body;
        let test = {}
        test.tesName = testName
        test.description = description
        test.price = price
        let newTest = new Test(req.body)
        try {

            await newTest.save()
            res.status(200).json({ message: 'new test is created in Database', _id: newTest._id })
        } catch (e) {
            res.status(500).json('unable to insert the newuser')
        }
    })
    router.get('/test', function (req, res) {

        Test.find({}).exec()
            .then(docs =>
                res.status(200).json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })


    router.put('/test/:id', function (req, res) {
        let qry = { _id: req.params.id }
        let doc = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }

        Test.findByIdAndUpdate(qry, doc, function (err, newResp) {
            if (err) return console.log(err)
            res.status(200).json(newResp)
        })

    })
    router.delete('/test/:id', function (req, res) {
        Test.findByIdAndDelete(req.params.id).exec()
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