const models = require('./database/models');
const User = models.User;
const Feed = models.Feed;
const Role = models.Role;

// Feed.create({
//     title: "My super Feed",
//     UserId: 3
//   })
//   .then((newFeed) => {
//     // The get() function allows you to recover only the DataValues of the object
//     console.log(newFeed.get())
//   })
//   .catch((err) => {
//     console.log("Error while Feed creation : ", err)
//   })

// User.bulkCreate([
//     {email: 'john-doe@domain.com', firstName: 'John',  lastName: 'DOE', password: 'edwewewe'},
//     {email: 'log_w@domain.com', firstName: 'Logan',  lastName: 'WOLVERINE', password: 'wewewe'},
//     {email: 'john-connor@domain.com', firstName: 'John',  lastName: 'CONNOR', password: 'ewewewe'}
//   ])
//   .then((newUsers) => {
//     console.log(newUsers)
//   })
//   .catch((err) => {
//     console.log("Error while users creation : ", err)
//   })

// 1:1
// Get the company linked to a given User
// Feed.findOne({
//     where: {title: 'My super Feed'}, include: 'user'
//   })
//   .then((foundUser) => {
//     // Get the User with Company datas included
//     console.log(foundUser)
//     // Get the company record only
//     // console.log(foundUser.company)
//   })
//   .catch((err) => {
//     console.log("Error while find user : ", err)
//   })
  
//   // 1:N
//   // Get the employees for a given company
//   User.findByPk(3, {include: ['feeds']})
//   .then((company) => {
//     // Get the Company with Users (employes) datas included
//     console.log(company)
//     // Get the Users (employes) records only
//     // console.log(company.get().employes)
//   })
//   .catch((err) => {
//     console.log("Error while find company : ", err)
//   })

Role.bulkCreate([
    {
      roleTitle: 'Admin',
    },
    {
      roleTitle: 'User',
    },
  ])

// Role.bulkCreate([
//   {
//     roleTitle: 'Admin',
//   },
//   {
//     roleTitle: 'User',
//   },
// ])
// .then((roles) => {
//   User.findAll({where: {id: [1, 2, 3]}, include: ['roles']})
//   .then((users) => {
//     // For user 1, 2 and 3 set the sames Roles
//     users.forEach(user => {
//       user.setRoles(roles) // Roles is an array (one user hasMany Roles)
//       .then((joinedUsersRoles) => {
//         console.log(joinedUsersRoles)
//       })
//       .catch((err) => console.log("Error while joining Users and Roles : ", err))
//     });
//   })
//   .catch((err) => console.log("Error while Users search : ", err))
// })
// .catch((err) => console.log("Error while Roles creation : ", err))


// Role.findOne({where: {
//     roleTitle: 'User'
// }})
//   .then((role) => {
//       console.log("role", role)
//     User.findOne({where: {email: "jj@gmail.com"}, include: ['roles']})
//     .then((user) => {
//         console.log("user +++++++++++++++++++++++++++++", user);
//       // For user 1, 2 and 3 set the sames Roles
//     //   users.forEach(user => {
//         user.setRoles(role) // Roles is an array (one user hasMany Roles)
//     //     .then((joinedUsersRoles) => {
//     //       console.log(joinedUsersRoles)
//     //     })
//     //     .catch((err) => console.log("Error while joining Users and Roles : ", err))
//     //   });
//     })
//     .catch((err) => console.log("Error while Users search : ", err))
//   })
//   .catch((err) => console.log("Error while Roles creation : ", err))