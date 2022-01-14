const db = require("../models");
const Banner = db.banner;

exports.getBanners = (req, res) => { Banner.findAll({ where: { type: 1 } }).then(response => res.send(response)) };

exports.insertBanner = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Banner.create({
    type: 1,
    position: parsedData.position,
    link: parsedData.link
  }).then(results => res.send(results));
};

exports.updateBanner = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Banner.update({
    link: parsedData.link,
    position: parsedData.position
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.updateBannerImage = (req, res) => {
  Banner.update({
    url: req.body.banner
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteBanner = (req, res) => { Banner.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };

exports.getExpoBanners = (req, res) => { Banner.findAll({ where: { type: 2 } }).then(response => res.send(response)) };

exports.insertExpoBanner = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Banner.create({
    type: 2,
    position: parsedData.position,
    link: parsedData.link
  }).then(results => res.send(results));
};

exports.updateExpoBanner = (req, res) => {
  const data = req.body.values;
  const parsedData = JSON.parse(data.toString());
  Banner.update({
    link: parsedData.link,
    position: parsedData.position
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.updateExpoBannerImage = (req, res) => {
  Banner.update({
    url: req.body.banner
  }, { where: { id: req.body.key }
  }).then(status => res.sendStatus(200));
};

exports.deleteExpoBanner = (req, res) => { Banner.destroy({ where: { id: req.body.key } }).then(status => res.sendStatus(200)); };
