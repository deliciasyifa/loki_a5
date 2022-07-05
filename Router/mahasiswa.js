const express = require("express");
const router = express();
const controller = require(`../controllers/indexcontroller`);
const authenticateToken = require(`../middleware/authToken`);

router.set("view engine", "ejs");
router.use(express.static("public"));

//route mengubah/membuat RPS yang sudah ada didalam Web
router.get("/rps", controller.mahasiswa.rpsMahasiswa);

router.get("/detailrps-:id", controller.mahasiswa.detailRPSMahasiswa);

router.get("/printrps", (req, res) => {
  res.render("RPS");
});

module.exports = router;
