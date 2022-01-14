module.exports = (sequelize, Sequelize) => {
  const Mat = sequelize.define("materials", {
    company_id: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    }
  });

  return Mat;
};
