const express = require("express");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");
const cookieSession = require("cookie-session");

const app = express();
if (process.env.NODE_ENV !== "production") require("dotenv").config();
const PORT = process.env.PORT || 4000;

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const usersRoutes = require("./route/Users");
const listRoutes = require("./route/List");

const passportConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
};
app.use(express.static("public"));
app.use('/about', express.static('public'))
app.use('/contact', express.static('public'))
app.use('/support', express.static('public'))
app.use('/protected', express.static('public'))

app.use(express.json());
app.use(helmet());
app.use(logger("dev"));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(
  cookieSession({
    httpOnly: false,
    name: "tabtabtab-session",
    keys: ["key1", "key2"],
  })
);

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.use((_req, _res, next) => {
  console.log(" Incoming Request 🦅 ");
  next();
});


// =========== Passport Config ============
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new GoogleStrategy(passportConfig, function (
    accessToken,
    refreshToken,
    profile,
    cb
  ) {
    return cb(null, profile);
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});
// =========================================

app.use("/users", usersRoutes);
app.use("/list", listRoutes);

app.get("/good", isLoggedIn, (req, res) =>{
  res.send(req.user).redirect("/protected")}
);
app.get("/failed", (req, res) => res.send(`Failed to login`));

app.get(
  "/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/login/callback",
  passport.authenticate("google", { 
    successRedirect: "/protected",
    failureRedirect: "/failed" }),
  function (req, res) {
    res.redirect("/good");
  }
);

app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.status(200).send({msg: "successfully logged out"});
});

app.use('/*', express.static('public'))

app.listen(PORT, () => {
  console.log(` 🚀 listening on ${PORT} `);
});
