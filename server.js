require("dotenv").config();

const express = require("express");
const x = express();
const jwt = require("jsonwebtoken");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cpmk = require("./backEnd/cpmk");
const conn = require("./config/conn");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const komponen_nilai = require("./backEnd/komponen_nilai");
const pertemuan_mingguan = require("./backEnd/pertemuan_mingguan");
const referensi = require("./backEnd/referensi");
const RPS = require("./backEnd/RPS");
const connect_seque = require("./CPMK_ORM/connect_seque");
const course_los = require("./CPMK_ORM/course_los");
const dosenrps = require("./routes/dosen");
const index = require("./routes/index");
const admin = require("./routes/admin");

const port = 8000;

//Set view
x.set("view engine", "ejs");
x.set("views", path.join(__dirname, "views"));
x.use(express.static("public"));
x.use("/css", express.static(__dirname + "public/css"));
x.use("/images", express.static(__dirname + "public/images"));
x.use("/public", express.static("public"));

x.use((req, res, next) => {
  req.db = conn;
  next();
});
x.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
x.use(flash());
x.use(methodOverride("_method"));

x.use(logger("dev"));
x.use(express.json());
x.use(express.urlencoded({ extended: false }));
x.use(cookieParser());
x.use(express.static(path.join(__dirname, "public")));

//route
x.use("/listrps", dosenrps);
x.use("/", index);
x.use("/admindaftarrps", admin);

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
x.get("/login", (req, res) => {
  res.render("login", { title: "login" });
});

//Route untuk halaman logout (fungsional 2)
x.get("/logout", (req, res) => {
  res.send("Ini merupakan halaman logout :)");
});

//Route untuk Landing Page
x.get("/", (req, res) => {
  res.render("landing_page", { title: "Index" });
});

//Route untuk halaman dashboard admin
x.get("/admin", (req, res) => {
  res.render("admin_dash", { title: "Admin" });
});

//Route untuk halaman daftar rps admin
x.get("/admindaftarrps", (req, res) => {
  res.render("admin_daftarrps", { title: "Admin" });
});

//Route untuk halaman daftar rps admin
x.get("/admincontributor", (req, res) => {
  res.render("admin_contributor", { title: "Admin" });
});

//Route untuk halaman daftar rps admin
x.get("/admintambahcontributor", (req, res) => {
  res.render("admin_tambahcontributor");
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
x.use("/bagian", connect_seque);
x.use("/bagian", course_los);

x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
