require('dotenv').config()

const express = require("express");
const x = express();
const jwt = require('jsonwebtoken')

const cpmk = require('./cpmk');
const conn = require('./config/conn');
const komponen_nilai = require('./komponen_nilai');
const pertemuan_mingguan = require('./pertemuan_mingguan');
const referensi = require('./referensi');
const RPS = require('./RPS');
const connect_seque = require('./CPMK_ORM/connect_seque');
const course_los = require('./CPMK_ORM/course_los');

const port = 8000;

//jwt
x.use(express.json())
const posts=[
  {
    username: 'dina',
    title: 'loki1'
  },
  {
    username: 'riska',
    title: 'loki2'
  }
]

x.get('/posts', authenticateToken,  (req, res)=> {
  res.json(posts.filter(post=> post.username === req.user.name))
})

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)
 
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user )=>
  {
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

//

//route awal
x.get("/",  (req, res) => {
  res.send("Welcome di Server JS")
});

//route untuk halaman login (fungsional 1)
x.post("/login", (req, res) => {
  res.send("Ini adalah Halaman Login");
});

//route untuk halaman logout (fungsional 2)
x.get("/logout", (req, res) => {
  res.send("Ini merupakan halaman logout :)");
});

x.use("/bagian", referensi);
x.use("/bagian", komponen_nilai);
x.use("/bagian", pertemuan_mingguan);
x.use("/bagian", RPS);
x.use("/bagian", cpmk);
x.use("/bagian", conn);
x.use("/bagian", connect_seque);
x.use("/bagian", course_los);



x.use("/public", express.static("public"));



x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
