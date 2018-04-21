const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

passport.use(new GoogleStrategy({ // use the Google Strategy
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => { // here we can use the information we get back from google
  console.log('accessToken', accessToken);
  console.log('refreshToken', refreshToken);
  console.log('profile: ', profile);
}));

app.get(
  '/auth/google', 
  passport.authenticate('google', { // passport knows to identify the strategy as 'google'
    scope: ['profile', 'email'] // what specific information in user's google account we want access to
  })
);

app.get('/auth/google/callback', passport.authenticate('google')); // when hitting this url, we will have the code back from google to use to authenticate

// default
// app.get('/', (req, res) => {  // no longer needed
//   res.send({ hi: 'there' });
// });

const PORT = process.env.PORT || 5000; // Heroku will either inject the port we are to use or we will use 5000
app.listen(PORT);