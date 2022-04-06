const express = require ('express');
const router = express.Router();
const mysql=require('mysql')
const conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'loki'
})
let id_ref=req.params.id_ref;
let nama_ref=req.params.nama_ref;


conn.connect();
//Query SQL
let sql_add='INSERT INTO referensi (id_ref, nama_ref)' + 'VALUES ( ? , ? )'
let sql_del='DELETE FROM referensi ' + 'WHERE id_ref = ?' 
let sql_upd='UPDATE referensi ' + 'SET id_ref= ? , nama_ref= ?'

//Menambahkan data
conn.query(
    sql_add,
    [id_ref,nama_ref],
    function(error,data,fields){
        if(error) throw error;

        let response={

        }
        res.json(data[0]);
    }
);

//Menghapus data
conn.query(
    sql_del,
    [id_ref,nama_ref],
    function(error,data,fields){
        if(error) throw error;

        let response={
            "message":"Data Berhasil di Hapus",
        }
        res.json(data[0]);
    }
);

//Mengupdate data 
conn.query(
    sql_upd,
    [id_ref,nama_ref],
    function(error,data,fields){
        if(error) throw error;

        let response={
            "message":"Data Berhasil diUpdate",
        }
        res.json(data[0]);
    }
);

conn.end()
module.exports = router;