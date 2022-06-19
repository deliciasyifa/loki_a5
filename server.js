require("dotenv").config();

const express = require("express");
const x = express();
const jwt = require("jsonwebtoken");

const cpmk = require("./backEnd/cpmk");
const conn = require("./config/conn");
const komponen_nilai = require("./backEnd/komponen_nilai");
const pertemuan_mingguan = require("./backEnd/pertemuan_mingguan");
const referensi = require("./backEnd/referensi");
const RPS = require("./backEnd/RPS");
const connect_seque = require("./CPMK_ORM/connect_seque");
const course_los = require("./CPMK_ORM/course_los");

const port = 8000;

//====================================================================================================
//Koneksi Database
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "loki",
  password: "",
});

//====================================================================================================
//Set view
x.set("view engine", "ejs");
x.set("views", "views");
x.use(express.static("public"));
x.use("/css", express.static(__dirname + "public/css"));
x.use("/images", express.static(__dirname + "public/images"));
x.use("/public", express.static("public"));

//JWT
x.use(express.json());
const posts = [
  {
    username: "dina",
    title: "loki1",
  },
  {
    username: "riska",
    title: "loki2",
  },
];

x.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

//=====================================================================================
//ROUTE
//Route untuk halaman login (fungsional 1)
x.post("/login", (req, res) => {
  res.send("Ini adalah Halaman Login");
});

//Route untuk halaman logout (fungsional 2)
x.get("/logout", (req, res) => {
  res.send("Ini merupakan halaman logout :)");
});

//Route untuk halaman dashboard admin
x.get("/", (req, res) => {
  res.render("admin_dash", { title: "Admin" });
});

//Route untuk halaman daftar rps admin
x.get("/admindaftarrps", (req, res) => {
  res.render("admin_daftarrps");
});

//Dosen
x.get("/rps", (req, res) => {
  res.render("dosen/rps", { title: "Dosen" });
});

x.use("/bagian", referensi);
x.use("/bagian", komponen_nilai);
x.use("/bagian", pertemuan_mingguan);
x.use("/bagian", RPS);
x.use("/bagian", cpmk);
x.use("/bagian", conn);
x.use("/bagian", connect_seque);
x.use("/bagian", course_los);

x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
