'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Feed, {as: 'feeds'})
    User.belongsToMany(models.Role, {through: 'UsersRoles', foreignKey: 'userId', as: 'roles'})

  };
  return User;
};