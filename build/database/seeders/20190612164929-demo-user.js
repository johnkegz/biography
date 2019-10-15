'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: "John",
      lastName: "Kalyango",
      email: "johnkal24@gmail.com",
      createdAt: "2018-08-16 012:11:52.181+01",
      updatedAt: "2018-08-16 012:11:52.181+01"
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
//# sourceMappingURL=20190612164929-demo-user.js.map