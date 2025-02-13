const mysql = require("mysql2");
const config = require("../config");
,
let connection = mysql.createConnection(config.db)

connection.connect(function(err) {
    if(err){
        console.log(err);
    }
    else{

        connection.query("Select * from notes", function(err, result){
            console.log(result);
        })

        console.log("connected to database is successfull:mysql");
    }
})

module.exports = connection.promise;