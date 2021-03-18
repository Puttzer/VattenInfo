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
	router.post('/test/create', AuthMiddleware.isAdminLoggedIn, ImageUpload.single('testimage'), async function (req, res) {
		console.log(req.file);
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

			const { testname, testtype, price, short_description, long_description, category } = req.body;
			let test = {}
			test.testname = testname
			test.testtype = testtype
			test.short_description = short_description
			test.long_description = long_description
			test.category = category
			test.price = price
			test.image = req.file.path
			let newTest = new Test(test)
			console.log(newTest)
			try {
				await newTest.save()
				res.status(200).json({ message: 'new test is created in Database', _id: newTest._id })
			} catch (e) {
				res.status(500).json('unable to insert the new test')
			}
		}

	})




	router.get('/tests', function (req, res) {

		Test.find({}).exec()
			.then(docs =>
				res.status(200).json({ message:'list of tests',
			tests:docs}))
			.catch(err => res.status(500)
				.json({

					message: 'Error finding user',
					error: err
				}))
	})


	router.put('/test/:id', async function (req, res) {
		let qry = { _id: req.params.id }
		let doc = {
			testName: req.body.testName,
			testTitle: req.body.testTitle,
			testKlass: req.body.testKlass,
			short_description: req.body.short_description,
			long_description: req.body.long_description,
			price: req.body.price
		}

		await Test.findByIdAndUpdate(qry, doc, function (err, newResp) {
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