const express = require("express");
const path = require("path");
const x = express();
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

//route mengubah/membuat RPS yang sudah ada didalam Web
x.post("/rps1", (req, res) => {
  res.send("Berhasil Mengubah RPS");
});

//route untuk modifikasi RPS
x.post("/modifrps", (req, res) => {
  res.send("RPS telah diperbarui ");
});

//route Cetak RPS
x.get("/print", (req, res) => {
  res.send("Mencetak RPS");
});

//route untuk menambahkan RPS baru
x.post("/newrps", (req, res) => {
  res.send("RPS baru berhasil ditambahkan \n Terima Kasih");
});

//route mengubah RPS yang sudah ada
x.post("/ubahrps", (req, res) => {
  res.send("RPS berhasil diperbarui\n Terima Kasih");
});

//route dosen menambah pertemuan mingguan pada rps
x.post("/tambahpert", (req, res) => {
  res.send("Dosen menambah pertemuan mingguan pada RPS");
});

//route dosen mengubah pertemuan mingguan pada rps
x.post("/ubahpert", (req, res) => {
  res.send("Dosen mengubah pertemuan mingguan pada RPS");
});

//route mengubah RPS yang sudah ada
x.put("/ubahrps", (req, res) => {
  res.send("RPS berhasil diperbarui\n Terima Kasih");
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
x.get("/deletereferensi", (req, res) => {
  res.send("Referensi telah berhasil dihapus");
});

//route mengubah referensi
x.get("/updatereferensi", (req, res) => {
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

x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
