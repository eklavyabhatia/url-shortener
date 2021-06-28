const { db, URL } = require('./model')
const { shortCodeToId } = require('../base-conversion/short-to-long')

const task = async (shortCode) => {
    try {
        await db.sync()
        const id = shortCodeToId(shortCode)
        const url = await URL.findByPk(id)
        if (!url) {
            return null
        } else {
            return url
        }
    } catch (err) {
        throw err
    }
}

module.exports = {
    task
}