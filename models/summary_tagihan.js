'use strict';
module.exports = (sequelize, DataTypes) => {
  const summary_tagihan = sequelize.define('summary_tagihan', {
    Jenis_tagihan_userId: DataTypes.INTEGER,
    jumlah_tagihan: DataTypes.INTEGER,
    periode: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  summary_tagihan.associate = function(models) {
    // associations can be defined here
  };
  return summary_tagihan;
};