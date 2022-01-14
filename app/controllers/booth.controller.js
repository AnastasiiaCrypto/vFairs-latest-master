const path = require('path');
const mkdirp = require('mkdirp')

const db = require("../models");
const Booth = db.booth;
const Program = db.program;
const Programs = db.programs;
const Link = db.menu;
const Mat = db.mat;
const Graphics = db.graphics;
const User = db.user;

exports.getBooth = (req, res) => { Booth.findAll({ where: { company_id: userCompanyId } }).then(response => res.send(response)) };
exports.getGraphics = (req, res) => { Graphics.findAll({ where: { company_id: userCompanyId } }).then(response => res.send(response)) };
exports.getProgramsSelector = (req, res) => { Program.findAll().then(response => res.send(response)) };
exports.getBooths = (req, res) => { Booth.findAll().then(response => res.send(response)) };

exports.updateBoothPosition = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Booth.update({
    position: parsedData.position
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.insertBooth = (req, res) => {
  Booth.create({company_id: req.body.company_id});
}

exports.insertGraphics = (req, res) => {
  Graphics.create({company_id: req.body.company_id})
}

exports.setLayout = (req, res) => {
  Booth.update({
    layout: req.body.layout
  }, { where: { company_id: userCompanyId }
  }).then(status => res.sendStatus(200));
};

exports.setPublish = (req, res) => {
  Booth.update({
    ready: 1
  }, { where: { company_id: userCompanyId }
  }).then(status => res.sendStatus(200));
};

exports.setPublishUser = (req, res) => {
  User.update({
    boothReady: 1
  }, { where: { id: userId }
  }).then(status => res.sendStatus(200));
};

exports.setColor = (req, res) => {
  Booth.update({
    color: req.body.color
  }, { where: { company_id: userCompanyId }
  }).then(status => res.sendStatus(200));
};

exports.setGraphics = (req, res) => {
  Graphics.update({
    layout: req.body.layout,
    color: req.body.color,
    tv: req.body.tv,
    banner1: req.body.banner1,
    banner2: req.body.banner2,
    banner3: req.body.banner3,
    tvLnk: req.body.tvLnk
  }, { where: { company_id: userCompanyId }
  }).then(status => res.sendStatus(200));
};

exports.resetBanners = (req, res) => {
  Booth.update({
    graphics: null
  }, { where: { company_id: userCompanyId }
  }).then(status => res.sendStatus(200));
};

exports.getMenus = (req, res) => { Link.findAll({ where: { company_id: userCompanyId } }).then(response => res.send(response)) };

exports.insertMenu = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Link.create({
    company_id: userCompanyId,
    title: parsedData.title,
    url: parsedData.url
  }).then(results => res.send(results));
};

exports.updateMenu = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Link.update({
    title: parsedData.title,
    url: parsedData.url
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteMenu = (req, res) => { Link.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };

exports.getPrograms = (req, res) => { Programs.findAll({ where: { company_id: userCompanyId } }).then(response => res.send(response)) };

exports.insertProgram = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Programs.create({
    company_id: userCompanyId,
    phd: parsedData.phd,
    master: parsedData.master,
    bach: parsedData.bach,
    courses: parsedData.courses
  }).then(results => res.send(results));
};

exports.updateProgram = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Programs.update({
    phd: parsedData.phd,
    master: parsedData.master,
    bach: parsedData.bach,
    courses: parsedData.courses
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteProgram = (req, res) => { Programs.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };

exports.getMats = (req, res) => { Mat.findAll({ where: { company_id: userCompanyId } }).then(response => res.send(response)) };

exports.insertMat = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Mat.create({
    company_id: userCompanyId,
    type: parsedData.type,
    title: parsedData.title
  }).then(results => res.send(results));
};

exports.updateMat = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Mat.update({
    type: parsedData.type,
    title: parsedData.title
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.uploadDoc = (req, res) => {
  var obj = req.files.file;
  var name = obj.name;
  var imagePath = path.join("uploads", userCompanyId, name);

  mkdirp(`uploads/${userCompanyId}`).then(made => { obj.mv(imagePath, function (err) {
    if (err) { return res.status(500).send(err); }
    Mat.update({ url: imagePath }, { where: { id: req.body.key } }).then(status => res.sendStatus(200));
  })})
};

exports.deleteMat = (req, res) => { Mat.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };
