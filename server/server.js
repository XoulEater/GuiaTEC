require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// Routess
app.use(routes);


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Server is running and connected to DB on', process.env.PORT);
    }); // Add closing parenthesis here
  })

  .catch((err) => {
    console.log('Error connecting to database', err);
  });


  