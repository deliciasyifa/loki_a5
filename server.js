const express = require("express");
const x = express();
const cpmk = require('./cpmk');
const komponen_nilai = require('./komponen_nilai');
const pertemuan_mingguan = require('./pertemuan_mingguan');
const referensi = require('./referensi');
const RPS = require('./RPS');
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
x.use("/bagian", cpmk)


x.use("/bagian", cpmk);
x.use("/bagian", pertemuan_mingguan);



x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
