import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/userRoutes';

const app = express();


app.use(express.json());

// Routes
app.use(routes);

const mongoUrl = process.env.MONGO_URL || ''; // Set a default value if MONGO_URL is undefined
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true } as any)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Server is running and connected to DB on', process.env.PORT);
    });
  })
  .catch((err: any) => {
    console.log('Error connecting to database', err);
}); 
