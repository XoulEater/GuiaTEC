import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/teacherRoutes';

const app = express();

app.use(express.json());

// Default middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

// Routes
app.use(routes);

// default get route
app.get('/', (req, res) => {
  res.send('Hello World');
});


app.listen(1234, () => {
  console.log('Server is running on port 1234');
});


// Database
const mongoURL = "mongodb+srv://whiit:1228@guiatec.95rtdmj.mongodb.net/";


// Connect to MongoDB
mongoose.Promise = Promise;
mongoose.connect(mongoURL);
mongoose.connection.on('error', (err) => {
  console.error(err);
  process.exit();
});



export default app;
