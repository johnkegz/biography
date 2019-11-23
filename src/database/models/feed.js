'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define('Feed', {
    title: DataTypes.STRING,
    feed: DataTypes.TEXT,
    picUrl: DataTypes.STRING,
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    rejected: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    UserId: DataTypes.INTEGER
  }, {});
  Feed.associate = function(models) {
    // associations can be defined here
    Feed.belongsTo(models.User,{foreignKey: 'UserId', as: 'user'})
  };
  return Feed;
};