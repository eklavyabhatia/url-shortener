const { db, URL } = require('./model')
const longToShort = require('../base-conversion/long-to-short')


const task = async (mainUrl) => {
    try {
        const id = await URL.count()

        const shortCode = longToShort.idToShortCode(id + 1)
        await db.sync()
        await URL.create({
            main_url: mainUrl,
            short_code: shortCode
        })

    } catch (err) {
        console.error(err)
    }

}

module.exports = {
    task
}
