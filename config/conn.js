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

// router.get('/database', function(req, res, next){

//     const connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password:"",
//         database:"loki"
    
//     });

//     connection.connect();
//     try {
        
//         console.log('Koneksi berhasil');
//       } catch (error) {
//         console.error('Tidak dapat koneksi ke database:', error);
//       }

//     // coba query
//     let sql = "SELECT * FROM users";
//     connection.query(sql, function(err, result, fields){
//         if(err) throw err;

//         res.json(result);
//     });

    

// });

// console.log("Berhasil Connect")



module.exports = connection;