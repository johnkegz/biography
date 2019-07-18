import { Strategy  as JwtStrategy } from 'passport-jwt';
import { ExtractJwt as ExtractJwt } from 'passport-jwt';
import model from '..//database/models'
import { keys } from './keys'

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrkey;
module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        model.User.findOne({where: { id: jwt_payload.id}})
        .then(user => {
            if(user) {
                return done(null, user);
            }
            return done(null, false)
        })
        .catch(err =>{
             console.log(` errrrr ++++${err}`);
        });
    }))
}
