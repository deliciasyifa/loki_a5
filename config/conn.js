const express = require("express");
// const router = express.Router();
const mysql = require('mysql2'); 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  database:"cobapweb"
});

connection.connect((err) => {
  if (!!err) {
    console.log(err);
  } else {
    console.log('Berhasil')
  }
})

module.exports = connection;

