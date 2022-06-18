require('dotenv').config()

const express = require("express");
const x = express();
const jwt = require('jsonwebtoken')

const cpmk = require('./backEnd/cpmk');
const conn = require('./config/conn');
const komponen_nilai = require('./backEnd/komponen_nilai');
const pertemuan_mingguan = require('./backEnd/pertemuan_mingguan');
const referensi = require('./backEnd/referensi');
const RPS = require('./backEnd/RPS');
const connect_seque = require('./CPMK_ORM/connect_seque');
const course_los = require('./CPMK_ORM/course_los');

const port = 3000;

//tes jwt
x.use(express.json())

let refreshTokens = []

x.post('/token', (req, res)=>{
  const refreshToken = req.body.token
  if(refreshToken == null) return res.sendStatus(401)
  if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>
  {
    if(err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name})
    res.json({accessToken: accessToken})
  })
})

x.post('/login', (req, res)=>{
  //authenticate user
  const username = req.body.username
  const user = {name: username}

  const accessToken = generateAccessToken(user)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  refreshTokens.push(refreshToken)
  res.json({accessToken: accessToken, refreshToken: refreshToken })
})

function generateAccessToken(user){
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'30s'})
}




x.use("/public", express.static("public"));



x.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});
