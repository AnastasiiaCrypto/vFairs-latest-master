module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("companies", {
    name: {
      type: Sequelize.STRING
    },
    representativename: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    email_verified_at: {
      type: Sequelize.DATE
    },
    password: {
      type: Sequelize.STRING
    },
    remember_token: {
      type: Sequelize.STRING
    },
    logo: {
      type: Sequelize.TEXT('long')
    },
    phone: {
      type: Sequelize.STRING
    },
    web: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT('long')
    },
    address: {
      type: Sequelize.STRING
    },
    boothReady: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  });

  return Company;
};
