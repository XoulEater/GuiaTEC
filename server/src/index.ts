import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/userRoutes';

const app = express();

app.use(express.json());

// Routes
app.use(routes);

app.use(cors({
  credentials : true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(4321, () => {
  console.log('Server is running on port 4321');
});

const mongoURL = "mongodb+srv://david:1234@guiatec-clusetr0.iapwai5.mongodb.net/GuiaTEC?retryWrites=true&w=majority&appName=guiaTEC-Clusetr0";

mongoose.Promise = Promise;
mongoose.connect(mongoURL);
mongoose.connection.on('error', (err) => {
  console.error(err);
  process.exit();
});
