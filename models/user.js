'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class User extends Model {

  }

  User.init(
    {
      nama: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          isNumeric: true,
        }
      },
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