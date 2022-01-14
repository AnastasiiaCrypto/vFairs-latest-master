module.exports = (sequelize, Sequelize) => {
  const Programs = sequelize.define("programs", {
    company_id: {
      type: Sequelize.INTEGER
    },
    phd: {
      type: Sequelize.JSON
    },
    master: {
      type: Sequelize.JSON
    },
    bach: {
      type: Sequelize.JSON
    },
    courses: {
      type: Sequelize.JSON
    }
  });

  return Programs;
};
