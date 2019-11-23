// import bcrypt from 'bcryptjs'
// import model from '../../database/models';


const model = require('../../database/models');
const bcrypt = require('bcryptjs');

const registerUser = (req, res) => {
    console.log("here ++++++++++++", req);
    model.User.findOne({where: { email: req.body.email}})
    .then(user => {
        if(user){
            return res.json('email already exists')
        }
        else{
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if(err) throw err;
                    const newPassword = hash;
                    const userData = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email:req.body.email,
                        password: newPassword
                    }
                    model.User.create(userData)
                    .then(User => {
                        model.Role.findOne({where: {
                            roleTitle: 'User'
                        }})
                          .then((role) => {
                              model.User.findOne({where: {email: req.body.email}, include: ['roles']})
                            .then((user) => {
                                user.setRoles(role)
                            })
                            .catch((err) => console.log("Error while Users search : ", err))
                          })
                          .catch((err) => console.log("Error while Roles creation : ", err))
                    return res.json(`Registration successful`)
                    });
                })
            }) 
        }
    })
    .catch(err => {
        return res.json(`err ->  ${err}`)
    });
}

// export default registerUser

module.exports = registerUser
