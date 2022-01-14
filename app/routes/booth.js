const controller = require("../../app/controllers/booth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/booth/get", controller.getBooth);
  app.get("/api/booth/programs/get", controller.getProgramsSelector);
  app.get("/api/booth/graphics/get", controller.getGraphics);

  app.get("/api/programs/get", controller.getPrograms);
  app.post("/api/programs/insert", controller.insertProgram);
  app.put("/api/programs/update", controller.updateProgram);
  app.delete("/api/programs/delete", controller.deleteProgram);

  app.put("/api/booth/layout/set", controller.setLayout);
  app.put("/api/booth/color/set", controller.setColor);
  app.put("/api/booth/graphics/set", controller.setGraphics);
  app.put("/api/booth/publish/set", controller.setPublish);
  app.put("/api/booth/publish/setUser", controller.setPublishUser);

  app.get("/api/menu/get", controller.getMenus);
  app.post("/api/menu/insert", controller.insertMenu);
  app.put("/api/menu/update", controller.updateMenu);
  app.delete("/api/menu/delete", controller.deleteMenu);

  app.get("/api/materials/get", controller.getMats);
  app.post("/api/materials/insert", controller.insertMat);
  app.put("/api/materials/update", controller.updateMat);
  app.delete("/api/materials/delete", controller.deleteMat);
  app.put("/api/uploadDoc", controller.uploadDoc);

  app.post("/api/booth/insert", controller.insertBooth);
  app.get("/api/booth/get", controller.getBooth);
  app.put("/api/booth/update", controller.updateBoothPosition);
  
  app.post("/api/graphics/insert", controller.insertGraphics);
  app.put("/api/booth/graphics/reset", controller.resetBanners);
};
