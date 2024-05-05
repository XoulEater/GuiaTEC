"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const teacherRoutes_1 = __importDefault(require("./routes/teacherRoutes"));
const excelRoutes_1 = __importDefault(require("./routes/excelRoutes"));
const teamRoutes_1 = __importDefault(require("./routes/teamRoutes"));
const workplanRoutes_1 = __importDefault(require("./routes/workplanRoutes"));
const activityRoute_1 = __importDefault(require("./routes/activityRoute"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Default middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.static("public"));
// Routes
app.use("/api/teachers", teacherRoutes_1.default);
app.use("/api/excel", excelRoutes_1.default);
app.use("/api/teams", teamRoutes_1.default);
app.use("/api/workplans", workplanRoutes_1.default);
app.use("/api/activities", activityRoute_1.default);
app.use("/api/students", studentRoutes_1.default);
app.use("/api/auth", authRoutes_1.default);
// Connect to MongoDB
mongoose_1.default.Promise = Promise;
// TODO: Add the connection string to the .env file
mongoose_1.default.connect(process.env.MONGO_CONNECTION_STRING);
mongoose_1.default.connection.on("error", (err) => {
    console.error(err);
    process.exit();
});
mongoose_1.default.connection.once("open", () => {
    console.log("Conexión exitosa a la base de datos.");
});
const port = process.env.PORT || 1234;
app.get("/", (_req, res) => {
    return res.send("Express Typescript on Vercel");
});
app.get("/ping", (_req, res) => {
    return res.send("pong 🏓");
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map