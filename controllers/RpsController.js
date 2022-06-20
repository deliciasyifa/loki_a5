//import model

const Rps = require('../models/RpsModel');

//export modul
module.exports = {
    rps: (req, res) => {
        Rps.fetchData(req.db, (err, rows) => {
            if (err) {
                req.flash('error', 'salah!!')
                res.render('dosen/rps', {data: ''})
            } else {
                res.render('dosen/rps', {data:rows})
            }
        })
    }
}
// dah lah ndk paham
//gak deng paham dikit dikit