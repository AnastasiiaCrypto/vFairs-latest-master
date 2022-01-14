module.exports = (sequelize, Sequelize) => {
  const Graphics = sequelize.define("graphics", {
    company_id: {
      type: Sequelize.INTEGER
    },
    tv: {
      type: Sequelize.TEXT('long')
    },
    banner1: {
      type: Sequelize.TEXT('long')
    },
    banner2: {
      type: Sequelize.TEXT('long')
    },
    banner3: {
      type: Sequelize.TEXT('long')
    },
    tvLnk: {
      type: Sequelize.STRING
    }
  });

  return Graphics;
};
