import AssistantDAO from "../DAOs/assistant"; // Asegúrate de usar la ruta correcta
import TeacherDAO from "../DAOs/teacher";
import { Request, Response } from "express";
import User from "model/User";
import Email from "./sendEmail";
export class AuthController {
  public static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      // Find user
      // get teachers
      const teachers = await TeacherDAO.getAllTeachers(); // Aquí obtienes la lista de asistentes

      // get assistants
      const assistants = await AssistantDAO.getAllAssistants(); // Aquí obtienes la lista de asistentes

      //merge users (teachers & assistants)
      const users: User[] = [...teachers, ...assistants];

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
    } catch (error) {
      res.status(500).json({ message: "Error login" });
    }
  }

  public static async test() {
    const email = new Email();
    await email.sendMail("mariana.viquez.monge@gmail.com", "hola", "prueba");
    console.log("correo enviado");
  }

  /*
    public static async resetPassword (req:Request, res:Response){
        try {
            const { email } = req.body
            // get teachers
            const teachers = await TeacherDAO.getAllTeachers()// Aquí obtienes la lista de asistentes
            
            // get assistants
            const assistants = await AssistantDAO.getAllAssistants()// Aquí obtienes la lista de asistentes
    
            //merge users (teachers & assistants)
            const users :User[] = [...teachers, ...assistants]
            
            //Encontrar el usuario
            const userFound = users.find(user => user.getEmail === email);
    
            if (!userFound) {
                return res.status(500).json({ message : "User Not Found"})
            }
            // Send email with token
            const email = new Email()
            await email.sendMail(userFound.getEmail, "Reset Password","Token: 1234");
            res.status(200).json({message: "Email sent"})
        }
        catch (error) {
            res.status(500).json({ message: "Error reset password"})
        }
    }
    */

  /*

    public static async validateToken (req:Request, res:Response){
        try {
            const { userID } = req.body
            // get teachers
            const teachers = await TeacherDAO.getAllTeachers()// Aquí obtienes la lista de asistentes
            
            // get assistants
            const assistants = await AssistantDAO.getAllAssistants()// Aquí obtienes la lista de asistentes
    
            //merge users (teachers & assistants)
            const users :User[] = [...teachers, ...assistants]
            
            //Encontrar el usuario
            const userFound = users.find(user => user.getID === userID);
    
            if (!userFound) {
                return res.status(500).json({ message : "User Not Found"})
            }
            // Send email with token
            res.status(200).json({message: "Token valid"})
        }
        catch (error) {
            res.status(500).json({ message: "Error validating token"})
        }
    }
    */

  /*
    public static async changePassword (req:Request, res:Response){
        try {
            const { email, newPassword } = req.body
            // get teachers
            const teachers = await TeacherDAO.getAllTeachers()// Aquí obtienes la lista de asistentes
            
            // get assistants
            const assistants = await AssistantDAO.getAllAssistants()// Aquí obtienes la lista de asistentes
    
            //merge users (teachers & assistants)
            const users :User[] = [...teachers, ...assistants]
            
            //Encontrar el usuario
            const userFound = users.find(user => user.getEmail === email);
    
            if (!userFound) {
                return res.status(500).json({ message : "User Not Found"})
            }
            // Check userType

            // Change password
            // if userType is teacher use TeacherDAO
            // else use AssistantDAO
        }
        catch (error) {
            res.status(500).json({ message: "Error changing password"})
        }
    }
    */
}
