const express = require ('express');
const router = express.Router();

//route mengubah/membuat RPS yang sudah ada didalam Web
router.post("/rps1", (req, res) => {
    res.send("Berhasil Mengubah RPS");
  });

//route untuk modifikasi RPS
router.post("/modifrps", (req, res) => {
    res.send("RPS telah diperbarui ");
  });

//route untuk menambahkan RPS baru
router.post("/newrps", (req, res) => {
    res.send("RPS baru berhasil ditambahkan \n Terima Kasih");
  });

//route mengubah RPS yang sudah ada
router.post("/ubahrps", (req, res) => {
    res.send("RPS berhasil diperbarui\n Terima Kasih");
  });

//route dosen menambah pertemuan mingguan pada rps
router.post("/tambahpert", (req, res) => {
    res.send("Dosen menambah pertemuan mingguan pada RPS");
  });

//route mengubah RPS yang sudah ada
router.post("/ubahrps", (req, res) => {
    res.send("RPS berhasil diperbarui\n Terima Kasih");
  });



module.exports = router;