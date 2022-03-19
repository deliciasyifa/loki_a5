const express = require ('express');
const router = express.Router();

//route mengubah/membuat RPS yang sudah ada didalam Web
router.post("/rps1", (req, res) => {
    console.log("====================Pengubahan data RPS====================");
    let obj = {
        "message": "Data diubah oleh Dosen",
        "Nip ": "13101210321",
        "Nama": "Budi Wijaya, S.Si",
        "Matkuliah yang diampu": "Pemograman Javascript",
        "Kode Matakuliah": "SIJs2102",
        "RPS": "(Isi RPS)",
        "Ket": "BERHASIL",
        "code": 200
    }
    res.json(obj);
    console.log("\n\nBerhasil Mengubah RPS");
  });

//route untuk modifikasi RPS
router.post("/modifrps", (req, res) => {
    let obj ={
        "Revisi": 10,
        "Kode Matakuliah": "SIBD2010",
        "Nama": "Basis Data",
        "alias": "BD 2022",
        "SKS": 3,
        "Semester": 3,
        "Deskripsi": "(Modifikasi isi RPS)",
        "Keterengan": "Berhasil modifikasi RPS",
        "Code": 200,
    }
    res.json(obj);
  });

//route untuk menambahkan RPS baru
router.post("/newrps", (req, res) => {
    
    let obj ={
        "Kode Matakuliah": "SIBD2010",
        "Nama": "Basis Data",
        "alias": "BD 2022",
        "SKS": 3,
        "Semester": 3,
        "Deskripsi": "(Tambah isi RPS)",
        "Keterengan": "Berhasil Ditambahkan",
        "Code": 200,
    }
    res.json(obj);
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