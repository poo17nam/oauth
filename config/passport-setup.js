const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

//grab user, create a cookie using some user's id i.e. id created by mongodb
passport.serializeUser((user,done) => {
  done(null,user.id)
})

//when cookie comes back to us from browser, take that id and find user in db based on id
passport.deserializeUser((id,done) => {
  User.findById(id).then((user) => {
    done(null,user)
  })
})

passport.use(
  new GoogleStrategy({
    // options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    // this callback function comes with the profile information
    // check if user already exists in our db
    User.findOne({
      googleId: profile.id
    }).then((currentUser) => {
      if (currentUser) {
        //already have the user
        console.log('user is :',currentUser);
        done(null, currentUser)
      } else {
        // if not create user in our db
        new User({
          username: profile.displayName,
          googleId: profile.id,
          thumbnail : profile._json.image.url
        }).save().then((newUser) => {
          console.log('new user created:', newUser);
          done(null,newUser)
        })
      }
    })

  })
)
