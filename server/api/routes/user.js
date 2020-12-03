const User = require('../../models/user')

module.exports = function (router) {
    router.post('/user', function (req, res) {
        console.log(req.body)
        let user = new User(req.body)
        console.log(user)
        user.save(function (err, user) {
            if (err) return console.log(err)
            res.status(200).json(user)
        })
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