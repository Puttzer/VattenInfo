const User = require('../../models/user')

module.exports = function (router) {
    router.post('/user', async function (req, res) {
        const { firstName, lastName, email, userRole, password } = req.body;
        let user = {}
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.password = password
        user.userRole = userRole
        let newUser = new User(req.body)
        try {

            await newUser.save()
            res.status(200).json({ message: 'user is inserted', _id: newUser._id })
        } catch (e) {
            res.status(500).json('unable to insert the newuser')
        }
    })
    router.get('/user/:id', function (req, res) {
        User.findById(req.params.id).exec()
            .then(docs => res.status(200)
                .json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding user',
                    error: err
                }))
    })
    router.get('/', function (req, res) {
        res.status(200).json({
            user: 'krishna',
            email: 'paruchurikris@gmail.com'
        })
    })
}