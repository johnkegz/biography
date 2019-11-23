'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleTitle: {
      type: DataTypes.STRING,
      defaultValue: "User"
    }
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {through: 'UsersRoles', foreignKey: 'roleId', as: 'users'})

  };
  return Role;
};