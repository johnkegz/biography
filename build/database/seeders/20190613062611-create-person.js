'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      */
    return queryInterface.bulkInsert('People', [{
      name: 'kalyango John',
      institution: 'Makerere',
      status: 'Headteacher',
      subject: 'English',
      knownfor: 'PE',
      bio: 'He went and changed the entire people in the morning',
      createdAt: "2018-08-16 012:11:52.181+01",
      updatedAt: "2018-08-16 012:11:52.181+01"
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('People', null, {});
  }
};
//# sourceMappingURL=20190613062611-create-person.js.map