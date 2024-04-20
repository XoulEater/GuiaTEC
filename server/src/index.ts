import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import teacherRoutes from "./routes/teacherRoutes";
import excelRoutes from "./routes/excelRoutes";
import teamRoutes from "./routes/teamRoutes";

const app = express();

app.use(express.json());

// Default middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

app.use(express.static("public"));

// Routes
app.use("/api/teachers", teacherRoutes);
app.use("/api/excel", excelRoutes);
app.use("/api/teams", teamRoutes);

// default get route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(1234, () => {
  console.log("Server is running on port 1234");
});

// Database
const mongoURL = "mongodb+srv://david:1234@guiatec-clusetr0.iapwai5.mongodb.net/GuiaTEC?retryWrites=true&w=majority&appName=guiaTEC-Clusetr0";

// Connect to MongoDB
mongoose.Promise = Promise;
mongoose.connect(mongoURL);
mongoose.connection.on("error", (err) => {
  console.error(err);
  process.exit();
});
mongoose.connection.once("open", () => {
  console.log("Conexión exitosa a la base de datos.");
});

export default app;