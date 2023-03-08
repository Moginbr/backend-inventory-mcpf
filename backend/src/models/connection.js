const mysql = require("mysql2/promise")

require(`dotenv`).config()

const connection = mysql.createPool({

    host: process.env.mysql_HOST,
    user: process.env.mysql_USER,
    password: process.env.mysql_PASSWORD,
    database: process.env.mysql_DB

})

module.exports = connection