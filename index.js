const express = require('express');
require('./services/passport'); // we just want to use passport so we require it but don't need to assign it to anything
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app); // pass app to authRoutes so app.get can be used

const PORT = process.env.PORT || 5000; // Heroku will either inject the port we are to use or we will use 5000
app.listen(PORT);