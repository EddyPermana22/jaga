'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jenis_tagihan_user = sequelize.define('Jenis_tagihan_user', {
    UserId: DataTypes.STRING,
    Jenis_tagihan_userId: DataTypes.STRING
  }, {});
  Jenis_tagihan_user.associate = function(models) {
    // associations can be defined here
  };
  return Jenis_tagihan_user;
};