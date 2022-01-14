module.exports = (sequelize, Sequelize) => {
  const Link = sequelize.define("menus", {
    company_id: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    }
  });

  return Link;
};
