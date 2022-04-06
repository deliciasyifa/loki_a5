const express = require("express");
const router = express.Router();
const mysql = require('mysql'); 

router.get('/database', function(req, res, next){

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"",
        database:"loki"
    
    });

    connection.connect();

    // coba query
    /*let sql = "SELECT *FROM users";
    connection.query(sql, function(err, result, fields){
        if(err) throw err;

        res.json(result);
    });*/

    

});

console.log("Berhasil Connect")

module.exports = router;