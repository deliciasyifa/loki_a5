const express = require("express");
const router = express();
const controller = require(`../controllers/indexcontroller`);

router.set("view engine", "ejs");
router.use(express.static("public"));

// dosen liat daftar matkul
router.get("/detailmatkul", controller.dosen.detailmatkul);
//dosen liat detail rps Matakuliah (read data)
router.get("/detail-:id", controller.dosen.Matkul);
//dosen cud cpmk
router.post("/tambahcpmk", controller.dosen.tambahcpmk);
router.post("/editcpmk", controller.dosen.editcpmk);
router.post("/hapuscpmk", controller.dosen.hapuscpmk);
//dosen cud cpp
// router.post('/tambahcpp', controller.dosen.tambahcpp)

// cud referensi
router.post("/tambahReferensi", controller.dosen.tambahReferensi);
router.post("/editReferensi", controller.dosen.editReferensi);
router.post("/hapusreferensi", controller.dosen.hapusreferensi);

//dosen crud pertemuan mingguan
router.post("/tambahmingguan", controller.dosen.tambahmingguan);
// router.post('/editmingguan', controller.dosen.editmingguan);
// router.post('/hapusmingguan', controller.dosen.hapusmingguan);

module.exports = router;
