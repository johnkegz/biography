'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ads = sequelize.define('Ads', {
    name: DataTypes.STRING,
    picUrl: DataTypes.STRING
  }, {});
  Ads.associate = function(models) {
    // associations can be defined here
  };
  return Ads;
};