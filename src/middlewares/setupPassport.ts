import { Express } from "express";

import passport from "passport";

import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { UserModel } from "~/models/User";

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const callbackURL = process.env.GOOGLE_CALLBACK_URL;

export const setupPassport = (app: Express) => {
  //セッションに保存
  passport.serializeUser((user: { id: string }, done) => {
    done(null, user.id);
  });

  //セッションから保存されたデータを呼び出し
  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await UserModel.findById(id);
      if (user == null) {
        throw new Error("user not found");
      }
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID,
        clientSecret,
        callbackURL,
      },
      function (_accessToken, _refreshToken, profile, done) {
        if (profile) {
          return done(null, profile);
        }

        return done(null, false);
      },
    ),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.get("/logout", (req: { logout: (callback: () => void) => void }, res) => {
    req.logout(() => {
      res.redirect(process.env.WISCRO_FRONT_URL);
    });
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    }),
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/",
      session: true,
    }),
    async (req, res, next) => {
      const requestUser = req.user as {
        emails: { value: string }[];
        displayName: string;
        photos: { value: string }[];
      };

      const emailValue = requestUser.emails[0]?.value;
      const profileUrlValue = requestUser.photos[0]?.value;

      if (!emailValue) {
        return next(new Error("email not found"));
      }

      let user = await UserModel.findOne({
        email: emailValue,
      });

      if (!user) {
        user = await UserModel.create({
          email: emailValue,
          username: requestUser.displayName,
          profileUrl: profileUrlValue,
        });
      }

      //成功したときの処理
      req.logIn(user, (err) => {
        if (err) {
          return next();
        }
        return res.redirect(process.env.WISCRO_FRONT_URL);
      });
    },
  );
};
