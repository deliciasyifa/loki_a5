const { Sequelize } = require("sequelize");

const dbconfig = new Sequelize("loki", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  dbconfig.authenticate();
  console.log("Koneksi Sudah Berhasil."); //tes koneksi
} catch (error) {
  console.error("Tidak bisa tersambung ke database:", error);
}

module.exports = dbconfig;
