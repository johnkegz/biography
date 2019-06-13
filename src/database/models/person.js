'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    institution: DataTypes.STRING,
    status: DataTypes.STRING,
    subject: DataTypes.STRING,
    knownfor: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};
