const express = require("express");
const path = require("path");
const x = express();
const port = 800;

//route awal
x.get("/", (req, res) => {
  res.send("Welcome di Server");
});

//route untuk halaman login
x.get("/login", (req, res) => {
  res.send("Halaman Login");
});

//route untuk halaman logout
x.get("/logout", (req, res) => {
  res.send("Ini merupakan halaman logout :)");
});

//route menampilkan RPS yang sudah ada didalam Web
x.get("/rps", (req, res) => {
  res.send("Tampilan RPS yang Sudah Tersimpan Pada Website");
});

//route mengubah/membuat RPS yang sudah ada didalam Web
x.put("/rps1", (req, res) => {
  res.send("RPS diperbarui oleh Admin");
});

//route Cetak RPS
x.get("/print", (req, res) => {
  res.send("Tampilan RPS seperti ini");
});

//route menambah RPS baru
x.post("/newrps", (req, res) => {
  res.send("RPS baru berhasil ditambahkan \n Terima Kasih");
});

//route mengubah RPS yang sudah ada
x.put("/ubahrps", (req, res) => {
  res.send("RPS berhasil diperbarui\n Terima Kasih");
});

//route hapus CPMK
x.delete("/clearcpmk", (req, res) => {
  res.send("Data berhasil dihapus\n Data yang dihapus juga akan terhapus secara\notomatis di penyimpanan komputer anda");
});

x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
