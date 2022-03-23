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

//route menambah referensi
x.get("/addreferensi", (req, res) => {
  res.send("Silahkan tambah referensi disini");
});

//route menghapus referensi
x.delete("/deletereferensi", (req, res) => {
  res.send("Referensi telah berhasil dihapus");
});

//route mengubah referensi
x.put("/updatereferensi", (req, res) => {
  res.send("Silahkan Ubah Referensi");
});

//route Dosen dapat menambah komponen penilaian
x.get("/addkomnilai", (req, res) => {
  res.send("Silahkan tambah Komponen penilaian anda");
});

//route Dosen dapat menghapus komponen penilaian
x.get("/clearkomnilai", (req, res) => {
  res.send("Komponen penilaian anda telah di hapus\n silahkan tambahkan komponen kembali pada menu tambah komponen penialain");
});

//route Dosen dapat merubah komponen penilaian
x.get("/updatekomnilai", (req, res) => {
  res.send("Silahkan ubah Komponen penilaian anda");
});

//bagian yang menggunakan method post
x.use('/RPS', RPS)
x.use('/Referensi', RPS) //UNTUK RPS INI DI SESUAIKAN NAMA FILE ATAU GMN?
x.use('/Komponen', RPS)
x.use('/Pertemuan', RPS)
x.use('/CPMK', RPS)

x.use('/public', express.static('public'));

x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
