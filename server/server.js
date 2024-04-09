require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/rutas');

const app = express();

app.use(express.json());

// Routes
app.use(routes);




mongoose.connect(process.env.MONGO_URL)
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Server is running on ', process.env.PORT);
  });
})


.catch((err) => {
  console.log('Error connecting to database', err);
});


