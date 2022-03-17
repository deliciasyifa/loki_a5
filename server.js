const express = require("express");
const path = require("path");
const x = express();
const port = 8000;

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
x.post("/rps1", (req, res) => {
  res.send("RPS diperbarui oleh Admin");
});

x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
