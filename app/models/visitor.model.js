module.exports = (sequelize, Sequelize) => {
  const visitor = sequelize.define("visitors", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
  });

  return visitor;
};
