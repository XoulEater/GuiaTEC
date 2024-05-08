"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const assistant_1 = __importDefault(require("../DAOs/assistant")); // Asegúrate de usar la ruta correcta
const teacher_1 = __importDefault(require("../DAOs/teacher"));
const sendEmail_1 = __importDefault(require("./sendEmail"));
class AuthController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // Find user
                // get teachers
                const teachers = yield teacher_1.default.getAllTeachers(); // Aquí obtienes la lista de asistentes
                // get assistants
                const assistants = yield assistant_1.default.getAllAssistants(); // Aquí obtienes la lista de asistentes
                //merge users (teachers & assistants)
                const users = [...teachers, ...assistants];
                //Encontrar el usuario
                const userFound = users.find((user) => user.getEmail === email);
                if (!userFound) {
                    return res.status(500).json({ message: "User Not Found" });
                }
                // Compare password
                const isCorrect = userFound.getPassword === password;
                if (!isCorrect) {
                    return res.status(500).json({ message: "Password incorrecta" });
                }
                // Send user in response
                res.status(200).json(userFound);
            }
            catch (error) {
                res.status(500).json({ message: "Error login" });
            }
        });
    }
    static test() {
        return __awaiter(this, void 0, void 0, function* () {
            const email = new sendEmail_1.default();
            yield email.sendMail("mariana.viquez.monge@gmail.com", "hola", "prueba");
            console.log("correo enviado");
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=authContoller.js.map