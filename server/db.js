var mysql = require("mysql");
const db = mysql.createPool({
    host: 'localhost',
    user: 'react_user',
    password: 'djemals123#',
    database: 'react_db'
});

module.exports=db;