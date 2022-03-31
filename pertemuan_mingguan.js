const express = require ('express');
const router = express.Router();

//route menambah pertemuan mingguan
router.post("/addpm/:id_pm", (req, res) => {
    console.log("====================Menambah Data Pertemuan Mingguan====================");
    let.add = {
        "message": "Menambahkan data pertemuan mingguan",
        "id_pm":"pm1",
        "kemampuan_akhir" : "Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web",
        "bahan_kajian" : [
            {
                "kode_bk" : "bk_a",
                "nama_bk" : "Web dan Hypertext Document"
            },
            {
                "kode_bk" : "bk_b",
                "nama_bk" : "Protokol HTTP (method dan status message)"
            },
            {
                "kode_bk" : "bk_c",
                "nama_bk" : "Client side (front-end)"
            },
            {
                "kode_bk" : "bk_d",
                "nama_bk" : "Server side (back-end)"
            },
            {
                "kode_bk" : "bk_e",
                "nama_bk" : "Interaksi client side dengan server side"
            },
        ],
        "metodep_alokw" : {
            "metodep" : "Presentasi Dosen dan diskusi",
            "alokw" : "3 x 50 mnt"
        },
        "pengalaman_belajar_mahasiswa" : "Mahasiswa memberikan tanggapan tentang konsep dasar dan komponen aplikasi berbasis web ",
        "kip" : "Keaktifan dan partisipasi dalam diskusi dan menjawab pertanyaan",
        "bobotp" : "x %",
        "code": 200
    }
    res.json(add);
    console.log("\n\nBerhasil Menambahkan Data Pertemuan Mingguan");
  });

//route Dosen dapat merubah pertemuan minggua
x.put("/editpm/:id_pm", (req, res) => {
    let.upd = {
        "message": "Mengedit data pertemuan mingguan",
        "id_pm":"pm1",
        "kemampuan_akhir" : "Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web",
        "bahan_kajian" : [
            {
                "kode_bk" : "bk_a",
                "nama_bk" : "Web dan Hypertext Document"
            },
            {
                "kode_bk" : "bk_b",
                "nama_bk" : "Protokol HTTP (method dan status message)"
            },
            {
                "kode_bk" : "bk_c",
                "nama_bk" : "Client side (front-end)"
            },
            {
                "kode_bk" : "bk_d",
                "nama_bk" : "Server side (back-end)"
            },
            {
                "kode_bk" : "bk_e",
                "nama_bk" : "Interaksi client side dengan server side"
            },
        ],
        "metodep_alokw" : {
            "metodep" : "Presentasi Dosen dan diskusi",
            "alokw" : "3 x 50 mnt"
        },
        "pengalaman_belajar_mahasiswa" : "Mahasiswa memberikan tanggapan tentang konsep dasar dan komponen aplikasi berbasis web ",
        "kip" : "Keaktifan dan partisipasi dalam diskusi dan menjawab pertanyaan",
        "bobotp" : "x %",
        "code": 200
    }
    res.json(upd);
    console.log("\n\nPertemuan Mingguan "+req.params.id_pm+" berhasil diedit");
  });

x.put("/deletepm/:id_pm", (req, res) => {
    let.del={
        "message": "Menghapus data pertemuan mingguan",
        "id_pm":"pm1",
        "kemampuan_akhir" : "Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web",
        "bahan_kajian" : [
            {
                "kode_bk" : "bk_a",
                "nama_bk" : "Web dan Hypertext Document"
            },
            {
                "kode_bk" : "bk_b",
                "nama_bk" : "Protokol HTTP (method dan status message)"
            },
            {
                "kode_bk" : "bk_c",
                "nama_bk" : "Client side (front-end)"
            },
            {
                "kode_bk" : "bk_d",
                "nama_bk" : "Server side (back-end)"
            },
            {
                "kode_bk" : "bk_e",
                "nama_bk" : "Interaksi client side dengan server side"
            },
        ],
        "metodep_alokw" : {
            "metodep" : "Presentasi Dosen dan diskusi",
            "alokw" : "3 x 50 mnt"
        },
        "pengalaman_belajar_mahasiswa" : "Mahasiswa memberikan tanggapan tentang konsep dasar dan komponen aplikasi berbasis web ",
        "kip" : "Keaktifan dan partisipasi dalam diskusi dan menjawab pertanyaan",
        "bobotp" : "x %",
        "code": 200
    }
    res.json(del);
    console.log("Penilaian Mingguan dengan Id"+req.params.id_pm+" berhasil dihapus");
});


module.exports = router;