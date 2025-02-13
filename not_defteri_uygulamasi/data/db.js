const mysql = require("mysql2");
const config = require("../config");
let pool = mysql.createPool(config.db).promise()

module.exports = pool; 