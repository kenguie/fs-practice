const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000; // Heroku will either inject the port we are to use or we will use 5000
app.listen(PORT);