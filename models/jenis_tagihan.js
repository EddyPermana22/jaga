'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jenis_tagihan = sequelize.define('Jenis_tagihan', {
    name: DataTypes.STRING
  }, {});
  Jenis_tagihan.associate = function(models) {
    // associations can be defined here
  };
  return Jenis_tagihan;
};