import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import config from "./config";

import User from "../models/User";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secretOrkey,
};

export default (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const user = await User.findOne({ _id: jwt_payload.id });
      if (user) {
        return done(null, user);
      }

      return done(null, false);
    })
  );
};
