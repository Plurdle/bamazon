let mysql = require('mysql')
let inquirer = require('inquirer')

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user:"root",
    password:"jdk43110",
    database: "bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database")
  });