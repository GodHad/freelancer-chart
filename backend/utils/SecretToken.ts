import jwt from 'jsonwebtoken';
import config from '../config/config'

export default (id, email, username) => {
  return jwt.sign({ id, email, username }, config.secretOrkey, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};