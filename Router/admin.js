const express = require("express");
const router = express();
const controller = require(`../controllers/indexcontroller`);

router.set("view engine", "ejs");
router.use(express.static("public"));

router.get("/rps", controller.admin.tampilRpsAdmin);
router.get("/menentukandosen-:id", controller.admin.tampilMenentukanDosen);
router.get("/laporanrpsadmin-:id", controller.admin.tampilLaporanRpsMatkul);
router.get("/printlaporan", (req, res) => {
  res.render("cetaklaporan");
});

router.post("/tambahmatkul", controller.admin.tambahMatkul);
router.post("/editmatkul", controller.admin.editMatkul);
router.post("/tambahdosen", controller.admin.tambahDosen);
router.get("/hapusdosen-:idhapus", controller.admin.hapusDosen);

module.exports = router;
