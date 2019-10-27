'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define('Feed', {
    title: DataTypes.STRING,
    feed: DataTypes.TEXT,
    picUrl: DataTypes.STRING
  }, {});
  Feed.associate = function(models) {
    // associations can be defined here
  };
  return Feed;
};