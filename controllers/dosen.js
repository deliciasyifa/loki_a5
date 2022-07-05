const model = require("../models/indexmodel");
const controller = {};
const jwt = require("jsonwebtoken");
const { Op, QueryTypes } = require("sequelize");
const sequelize = model.dbconfig;

//------------------DOSEN----------------

//tampil matkul

controller.detailmatkul = async (req, res) => {
  const id = req.params.id;
  const daftar = await model.course_plans.findAll({ where: { rev: { [Op.gte]: 0 } }, attributes: ["id", "code", "name", "semester", "credit"] });

  res.render("dosen_daftarmatkul", { daftar });
};

controller.Matkul = async (req, res) => {
  //baca data
  const id = req.params.id;
  const cpp = await model.curricula.findAll({ attributes: ["name", "description"] });
  const rps = await model.course_plans.findOne({ where: { id } });
  const cpmk = await model.course_los.findAll({ where: { course_plan_id: id }, attributes: ["id", "type", "code", "name", "parent_id"] });
  const referensi = await model.course_plan_references.findAll({ where: { course_plan_id: id }, attributes: ["title", "author", "publisher", "year", "description"] });
  const prtmingguan = await model.course_plan_details.findAll({ where: { course_plan_id: id }, attributes: ["id", "week", "material", "method", "student_experience"] });
  const komponenpenilaian = await model.course_plan_assessments.findAll({ where: { course_plan_id: id }, attributes: ["id", "name", "percentage"] });
  res.render("dosen_detailrps", { cpp, rps, cpmk, referensi, prtmingguan, komponenpenilaian });
};

controller.tambahcpmk = async (req, res) => {
  const { course_plan_id, name, code, parent_id, type } = req.body;

  const CPMKAda = await model.course_los.findOne({
    where: { [Op.and]: [{ course_plan_id }, { code }] },
  });
  if (CPMKAda) return res.status(400).send("CPMK sudah ada");

  try {
    await model.course_los.create({
      course_plan_id,
      name,
      code,
      parent_id,
      type,
    });
    console.log("CPMK berhasil ditambahkan");
    res.redirect("back");
  } catch (err) {
    console.log(err);
  }
};

controller.editcpmk = async (req, res) => {
  const { id, name, code, parent_id, type } = req.body;

  try {
    await model.course_los.update(
      {
        name,
        code,
      },
      {
        where: { id },
      }
    );
    res.redirect("back");
  } catch (err) {
    console.log(err);
  }
};

controller.hapuscpmk = async (req, res) => {
  const { id } = req.body;
  try {
    await model.course_los.destroy({
      where: { id },
    });
    console.log(`CPMK berhasil di hapus`);
    res.redirect("back");
  } catch (err) {
    console.log(err);
  }
};

//cpp

controller.tambahReferensi = async (req, res) => {
  const { course_plan_id, title, author, publisher, year, description } = req.body;

  const referensiAda = await model.course_plan_references.findOne({
    where: { [Op.and]: [{ course_plan_id }, { title }] },
  });
  if (referensiAda) return res.status(400).send("Referensi sudah ada");

  try {
    await model.course_plan_references.create({
      course_plan_id,
      title,
      author,
      publisher,
      year,
      description,
    });
    res.redirect("back");
  } catch (err) {
    console.log(err);
  }
};
//   //edit referensi

// //   controller.editReferensi = async (req, res) => {
// //     const {id, title,author, publisher,year,description} = req.body

// //       try{
// //         await model.course_plan_references.update({
// //             title,
// //             author,
// //             publisher,
// //             year,
// //             description
// //       },{
// //         where:{ id }
// //       })
// //       res.redirect('back')
// //     }catch(err){
// //       console.log(err)
// //     }
// //   }
//hapus referensi

controller.hapusreferensi = async (req, res) => {
  const { id } = req.body;
  try {
    await model.course_plan_references.destroy({
      where: { id },
    });
    console.log(`CPMK berhasil di hapus`);
    res.redirect("back");
  } catch (err) {
    console.log(err);
  }
};

controller.editReferensi = async (req, res) => {
  const { id, title, author, publisher, year, description } = req.body;

  try {
    await model.course_plan_references.update(
      {
        title,
        author,
        publisher,
        year,
        description,
      },
      {
        where: { id },
      }
    );
    res.redirect("back");
  } catch (err) {
    console.log(err);
  }
};

controller.tambahmingguan = async (req, res) => {
  const { course_plan_id, week, material, method, student_experience } = req.body;

  const mingguanAda = await model.course_plan_details.findOne({
    where: { [Op.and]: [{ course_plan_id }, { week }] },
  });
  if (mingguanAda) return res.status(400).send("Pertemuan Mingguan sudah ada");

  try {
    await course_plan_details.create({
      course_plan_id,
      week,
      material,
      method,
      student_experience,
    });
    console.log("Pertemuan Mingguan berhasil ditambahkan");
    res.redirect("back");
  } catch (err) {
    console.log(err);
  }
};

controller.hapusmingguan = async (req, res) => {
  const { id } = req.body;
  try {
    await model.course_plan_details.destroy({
      where: { id },
    });
    console.log(`Pertemuan Mingguan berhasil di hapus`);
    res.redirect("back");
  } catch (err) {
    console.log(err);
  }
};

module.exports = controller;
