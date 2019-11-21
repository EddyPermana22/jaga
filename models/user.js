'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class User extends Model {

  }

  User.init(
    {
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  );

  User.associate = function (models) {
    // associations can be defined here
  };
  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, saltRounds)
      .then(function (hash) {
        user.password = hash
      });
  });

  return User;
};