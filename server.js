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

//route menampilkan RPS yang sudah ada didalam Web
x.get("/daftarrps", (req, res) => {
  res.send("Daftar RPS");
});

//route Cetak RPS
x.get("/print", (req, res) => {
  res.send("Mencetak RPS");
});

//route melihat rps
x.get("/lihatrps", (req, res) => {
  res.send("Mahasiswa dapat melihat RPS di sini");
});

//route mendownload rps
x.get("/downloadrps", (req, res) => {
  res.send("Halaman untuk download RPS");
});

//route untuk menghapus CPMK
x.get("/clearcpmk", (req, res) => {
  res.send("Data berhasil dihapus\n Data yang dihapus juga akan terhapus secara\notomatis di penyimpanan komputer anda");
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
