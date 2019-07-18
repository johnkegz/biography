import bcrypt from 'bcryptjs'
import model from '../../database/models';

const registerUser = (req, res) => {
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
                    const userdata = {
                        username: req.body.username,
                        email:req.body.email,
                        password: newPassword
                    }
                    model.User.create(userdata)
                    .then(User => {
                    return res.json(`created ${User}`)
                    });
                })
            }) 
        }
    })
    .catch(err => {
        return res.json(`err ->  ${err}`)
    });
}

export default registerUser
