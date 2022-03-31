const express = require ('express');
const router = express.Router();

//tambah

router.put("/tambahcpmk", (req, res) => {
    console.log("====================Penambahan Data CPMK====================");
    let obj = {
        "Keterangan": "menambah CPMK mata kuliah",
        "message": "Data ditambah oleh dosen",
        "Nip ": "13101210321",
        "Nama": "Budi Wijaya, S.Si",
        "Matkuliah yang diampu": "Pemograman Web",
        "Kode Matakuliah": "SIJs2102",
        "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web\n",
                    "2. Mahasiswa mampu menggunakan salah satu technology stack untuk membangun aplikasi berbasis web\n",
                    "3. Mahasiswa mampu menggunakan pemograman asynchronous\n"],
        "Cek": "PENAMBAHAN DATA CPMK BERHASIL",
        "code": ["OK",200]
    }
    res.json(obj);
    console.log("\n\nBerhasil Menambah Data CPMK\n");
  });

//ubah

router.patch("/updatecpmk", (req, res) => {
    console.log("====================Update Data CPMK====================");
    let obj = {
        "Keterangan": "Update CPMK mata kuliah",
        "message": "Data diupdate oleh dosen",
        "Nip ": "13101210321",
        "Nama": "Budi Wijaya, S.Si",
        "Matkuliah yang diampu": "Pemograman Web",
        "Kode Matakuliah": "SIJs2102",
        "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web\n",
                    "2. Mahasiswa mampu menggunakan salah satu technology stack untuk membangun aplikasi berbasis web\n",
                    "3. Mahasiswa mampu menggunakan pemograman asynchronous\n",
                    "4. Mahasiswa mampu menerapkan keamanan untuk situs web\n",
                    "5. Mahasiswa mampu menggunakan dan mendesain format data JSON\n",
                    "6. Mahasiswa mampu deploy aplikasi web ke internet\n",
                    "7. Mahasiswa mampu mendemonstrasikan keterampilan bekerja sama dengan tim\n"],
        "Cek": "Update DATA CPMK BERHASIL",
        "code": ["OK",200]
    }
    res.json(obj)
    console.log("\n\nBerhasil Update Data CPMK\n");
  });

//hapus

router.delete("/hapuscpmk", (req, res) => {
    console.log("====================Delete Data CPMK====================");
    let obj = {
        "Keterangan": "Delete CPMK mata kuliah",
        "message": "Data diupdate oleh dosen",
        "Nip ": "13101210321",
        "Nama": "Budi Wijaya, S.Si",
        "Matkuliah yang diampu": "Pemograman Web",
        "Kode Matakuliah": "SIJs2102",
        "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web\n",
                    "2. Mahasiswa mampu menggunakan salah satu technology stack untuk membangun aplikasi berbasis web\n",
                    "3. Mahasiswa mampu menggunakan pemograman asynchronous\n",
                    "4. Mahasiswa mampu menerapkan keamanan untuk situs web\n",
                    "5. Mahasiswa mampu menggunakan dan mendesain format data JSON & deploy aplikasi web ke internet\n"
                ],
        "Cek": "DELETE DATA CPMK BERHASIL",

    }
    res.json(obj);
    console.log("\n\nBerhasil Delete Data CPMK\n");
  });

module.exports = router;