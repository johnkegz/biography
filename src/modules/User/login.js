import model from '../../database/models';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { keys } from '../../config/keys'

const loginUser = (req, res) => {
    model.User.findOne({where:{email: req.body.email}})
    .then(user => {
        if(!user) {
            return res.status(404).json({email: 'User not found'})
        }
        
        bcrypt.compare(req.body.password, user.password)
        .then(isMatch => {
            if(isMatch){
                //User matched
                const payload = {
                    id: user.id,
                    username: user.username
                }
                //sign token
                jwt.sign(
                    payload, 
                    keys.secretOrkey,
                    { expiresIn: 3600 }, 
                    (err, token) =>{
                        console.log('here man');
                        return res.json({
                            success: 'true',
                            token: `Bearer ${token}`
                        })
                    }
                )
            } else
            {   console.log('here ++', isMatch);
                return res.status(400).json({password: 'wrong password'})
            }
        });
    })
    .catch(err => res.send(`err ${err}`));
}

export default loginUser
