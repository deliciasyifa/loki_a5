const express = require('express');
const x = express();
const post = require('./post');
const port = 8000;

//route awal
x.get("/", (req, res) => {
  res.send("Welcome di Server JS");
});

//route untuk halaman login
x.get("/login", (req, res) => {
  res.send("Ini adalah Halaman Login");
});

//route untuk halaman logout
x.get("/logout", (req, res) => {
  res.send("Ini merupakan halaman logout :)");
});

//bagian yang menggunakan method post
x.use('/RPS', RPS)
x.use('/Referensi', referensi)
x.use('/Komponen', komponen_nilai)
x.use('/Pertemuan', pertemuan_mingguan)
x.use('/CPMK', cpmk)

x.use('/public', express.static('public'));

x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
