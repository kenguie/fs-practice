const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy());

// app.get('/', (req, res) => {  // no longer needed
//   res.send({ hi: 'there' });
// });

const PORT = process.env.PORT || 5000; // Heroku will either inject the port we are to use or we will use 5000
app.listen(PORT);