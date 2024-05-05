"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentController_1 = require("../controllers/studentController");
const router = express_1.default.Router();
//Student Routes
router.get("/", studentController_1.StudentController.getAllStudents);
router.get("/campus/:campus", studentController_1.StudentController.getStudentsByCampus);
router.put("/:code", studentController_1.StudentController.updateStudent);
router.delete("/:code", studentController_1.StudentController.deleteStudent);
exports.default = router;
//# sourceMappingURL=studentRoutes.js.map