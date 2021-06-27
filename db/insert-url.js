const { db, URL } = require('./model')
const longToShort = require('../base-conversion/long-to-short')
// console.log(longToShort)

const task = async (mainUrl) => {
    try {
        const urls = await URL.findAll()

        const shortCode = await longToShort.idToShortCode(urls.length+1)
        await db.sync()
        await URL.create({
            main_url: mainUrl,
            short_code: shortCode
        })

    } catch (err) {
        console.error(err)
    }

}

task('https://gmail.com')
