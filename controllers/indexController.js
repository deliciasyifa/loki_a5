//import model

const index = require("../models/indexModel");

//export modul
module.exports = {
  landing_page: (req, res) => {
    index.fetchData(req.db, (err, rows) => {
      if (err) {
        req.flash("error", "salah!!");
        res.render("landing_page", { data: "" });
      } else {
        res.render("landing_page", { data: rows });
      }
    });
  },
};
