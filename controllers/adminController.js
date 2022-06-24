//import model

const admin = require("../models/adminModel");

//export modul
module.exports = {
  admin_daftarrps: (req, res) => {
    admin.fetchData(req.db, (err, rows) => {
      if (err) {
        req.flash("error", "salah!!");
        res.render("admin_daftarrps", { data: "" });
      } else {
        res.render("admin_daftarrps", { data: rows });
      }
    });
  },
};
