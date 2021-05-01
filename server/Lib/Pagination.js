function paginatedResults(model) {
    return async (req, res, next) => {
        console.log('move to pagination')

        console.log(req.query)
        const page = parseInt(req.query.page)
        console.log(page)
        const limit = parseInt(req.query.limit)
        console.log(limit)
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const count = await model.countDocuments().exec()
        const pages = Math.ceil(count / limit)
        console.log(pages)

        const results = {}
        results.pages = pages
        if (endIndex < await model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        try {

            results.results = await model.find().limit(limit).skip(startIndex).exec()

            res.paginatedResults = results
            next()
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }

    }
}

module.exports = { paginatedResults }