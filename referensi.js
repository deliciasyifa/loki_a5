const express = require ('express');
const router = express.Router();

//route menambah referensi
router.post("/addref", (req, res) => {
    let add={
        "message":"Silahkan tambah referensi disini",
        "id":101,
        "nama":[
            "Bovee & Thill (2009:61)",
            "Renn (2003:95 )"
        ]
    }
    res.json(add);
    console.log("Referensi berhasil ditambahkan");
});
  
  //route menghapus referensi
  router.delete("/deleteref/:id", (req, res) => {
    let del={
        "message":"Masukkan id referensi yang akan dihapus",
        "id":102,
        "nama":[
            "Peter (2006:01)",
        ]
    }
    res.json(del);
    console.log("Referensi dengan Id"+req.params.id+" berhasil dihapus");
  });
  
  //route mengubah referensi
  router.put("/updateref", (req, res) => {
    let upd={
        "message":"Masukkan id referensi yang akan diUpdate/ dimodifikasi",
        "id":101,
        "nama":[
            "Bovee & Thill (2009:61)",
            "Renn (2003:95 )"
        ]
    }
    res.json(upd);
    console.log("Referensi berhasil diupdate/dimodifikasi");
  });
  
  module.exports = router;