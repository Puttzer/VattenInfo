const getSlug = require('speakingurl');

const slugOptions = {
    separator: '_',
    lang: 'sv',
    titleCase: true,
}


module.exports = {
    slugTitle(title) {
        const slug = getSlug(title, slugOptions)
        console.log(slug)
        return slug
    }
}