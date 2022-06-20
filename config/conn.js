const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

router.get("/database", function (req, res, next) {
  const mysql = require("mysql");
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "loki",
    password: "",
  });

  connection.connect();
  try {
    console.log("Koneksi berhasil");
  } catch (error) {
    console.error("Tidak dapat koneksi ke database:", error);
  }

  // coba query
  let sql = "SELECT * FROM users";
  connection.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
});

// console.log("Berhasil Connect")

module.exports = router;
