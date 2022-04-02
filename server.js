const express = require("express");
const x = express();
const cpmk = require('./cpmk');
const DB = require('./DB');
const komponen_nilai = require('./komponen_nilai');
const pertemuan_mingguan = require('./pertemuan_mingguan');
const referensi = require('./referensi');
const RPS = require('./RPS');
const connect_seque = require('./CPMK_ORM/connect_seque');
const course_los = require('./CPMK_ORM/course_los');
const port = 8000;



//route awal
x.get("/", (req, res) => {
  res.send("Welcome di Server JS");
});

//route untuk halaman login (fungsional 1)
x.get("/login", (req, res) => {
  res.send("Ini adalah Halaman Login");
});

//route untuk halaman logout (fungsional 2)
x.get("/logout", (req, res) => {
  res.send("Ini merupakan halaman logout :)");
});

x.use("/bagian", referensi);
x.use("/bagian", komponen_nilai);
x.use("/bagian", RPS);
x.use("/bagian", cpmk);
x.use("/bagian", DB);
x.use("/bagian", connect_seque);
x.use("/bagian", course_los);

x.use("/public", express.static("public"));


x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
