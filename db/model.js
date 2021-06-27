const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('url_shortener', 'non_premium_user', 'non_premium_pass', {
    host: 'localhost',
    dialect: 'mysql'
})


const URL = db.define('url', {
    main_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    short_code: {
        type: DataTypes.STRING(6),
        allowNull: false,
    },
    counter: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})


db.sync()
    .then(() => console.log('db synced'))
    .catch((err) => console.log(err))

module.exports = {
    db, URL
}