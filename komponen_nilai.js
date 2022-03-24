const express = require ('express');
const router = express.Router();           

  //route Dosen dapat menambah komponen penilaian
  router.post("/addkomp", (req, res) => {
    let add={
        "message":"Silahkan tambah komponen penilaian disini",
        "id":205,
        "namaMK":"pemrograman Web",
        "komponen":{
            "Tugas":25,
            "Kuis":10,
            "UTS":30,
            "UAS":30,
            "Sikap":5
        }
    }
    res.json(add);
    console.log("Komponen penilaian berhasil ditambahkan");
  });
  
  //route Dosen dapat menghapus komponen penilaian
  router.delete("/clearkomp/:id", (req, res) => {
    let del={
        "message":"Masukkan id Komponen penilaian yang akan dihapus",
        "id":205,
        "namaMK":"pemrograman Web",
        "komponen":{
            "Tugas":25,
            "Kuis":10,
            "UTS":30,
            "UAS":30,
            "Sikap":5
        }
    }
    res.json(del);
    console.log("Komponen penilaian dengan Id"+req.params.id+" berhasil dihapus");
  });
  
  //route Dosen dapat merubah komponen penilaian
  router.put("/updatekomp/:id", (req, res) => {
    let upd={
        "message":"Masukkan id referensi yang akan diUpdate/ dimodifikasi",
        "id":205,
        "namaMK":"pemrograman Web",
        "komponen":{
            "Tugas":20,
            "Kuis":15,
            "UTS":30,
            "UAS":35 
        }
    }
    res.json(del);
    console.log("Komponen penilaian dengan Id"+req.params.id+" berhasil update");
  });

  module.exports = router;