const express = require ('express');
const router = express.Router();           

  //route Dosen dapat menambah komponen penilaian
  router.post("/tambah", (req, res) => {
    let add={
        "message":"======Penambahan Data Komponen Nilai======",
        "Course_id":205,
        "Name":"pemrograman Web",
        "komponen":[
                      "1. Tugas =  15%",
                      "2. Keaktifan = 10%",
                      "3. UTS = 30%",
                      "4. UAS = 45%",
         ]

    }
    res.json(add);
    console.log("Komponen penilaian berhasil ditambahkan");
  });
  
  //route Dosen dapat menghapus komponen penilaian
  router.delete("/hapus", (req, res) => {
    let del={
      "message":"======Delete Data Komponen Nilai======",
      "Course_id":205,
      "Name":"pemrograman Web",
      "komponen":[
                    "1. Tugas   = 25%",
                    "3. UTS     = 30%",
                    "4. UAS     = 45%",
       ]
    }
    res.json(del);
    console.log("Komponen penilaian berhasil dihapus");
  });
  
  //route Dosen dapat merubah komponen penilaian
  router.put("/ubah", (req, res) => {
    let upd={
      "message":"======Update Komponen Nilai======",
      "Course_id":205,
      "Name":"pemrograman Web",
      "komponen":[
                    "1. Tugas   = 10%",
                    "3. UTS     = 25%",
                    "4. UAS     = 45%",
                    "5. Kuis    = 15%",
                    "6. Sikap   = 5%"
       ]
    }
    res.json(del);
    console.log("Komponen penilaian berhasil update");
  });

  module.exports = router;