const express = require("express");
const router = express.Router();

//route menambah RPS baru (fungsional 6)
router.post("/addrps", (req, res) => {
  let add = {
    message: "Silahkan tambahkan RPS disini",
    "mata kuliah": {
      "kode matkul": "JSI62125",
      "nama matkul": "Pemrograman Web",
      "jumlah sks": "3",
      semester: "4",
    },
  };
  res.json(add);
  console.log("RPS berhasil ditambahkan");
});

module.exports = router;
