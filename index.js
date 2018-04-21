const express = require('express');
require('./services/passport'); // we just want to use passport so we require it but don't need to assign it to anything
// const authRoutes = require('./routes/authRoutes'); 

const app = express();

// authRoutes(app); // pass app to authRoutes so app.get can be used
require('./routes/authRoutes')(app); // changed the code bc we call in authRoutes but it brings in a function we run. This way we require and run the function in one line

const PORT = process.env.PORT || 5000; // Heroku will either inject the port we are to use or we will use 5000
app.listen(PORT);