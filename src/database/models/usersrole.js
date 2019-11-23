'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersRole = sequelize.define('UsersRole', {
    userId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {});
  UsersRole.associate = function(models) {
    // associations can be defined here
    UsersRole.belongsTo(models.User, {foreignKey: 'userId'})
    UsersRole.belongsTo(models.Role, {foreignKey: 'roleId'})
  };
  return UsersRole;
};