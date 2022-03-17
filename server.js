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

x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
