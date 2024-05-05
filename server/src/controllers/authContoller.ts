import AssistantDAO from "../DAOs/assistant"; // Asegúrate de usar la ruta correcta
import TeacherDAO from "../DAOs/teacher";
import { Request, Response } from "express";
import User from "../model/User";
import Email from "./sendEmail";
import Teacher from "model/Teacher";
import Assistant from "model/Assistant";

export class AuthController {

  // Get all users
  static async getUsers(): Promise<User[]> {
    const teachers = await TeacherDAO.getAllTeachers();
    const assistants = await AssistantDAO.getAllAssistants();
    const users: User[] = [...teachers, ...assistants];
    return users;
  }

  //Login
  public static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      // Get users
      const users = await AuthController.getUsers();

      //Find user
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

 /* public static async test() {
    const email = new Email();
    await email.sendMail("mariana.viquez.monge@gmail.com", "hola", "prueba");
    console.log("correo enviado");
  }
*/

  //Reset Password
  public static async resetPassword (req:Request, res:Response){
      try {
          const {email} = req.body
          // Get users
          const users = await AuthController.getUsers();
          
          //Find user
          const userFound = users.find(user => user.getEmail === email);
  
          if (!userFound) {
              return res.status(500).json({ message : "User Not Found"})
          }
          // Send email with token
          const emailSent = new Email()
          const userToken = userFound.getId()
          await emailSent.sendMail(userFound.getEmail(), "Reset Password","Use this Token to reset your password:" + userToken);
          res.status(200).json({message: "Email sent"})
      }
      catch (error) {
          res.status(500).json({ message: "Error reset password"})
      }
  }
    

  //Validate Token
    public static async validateToken (req:Request, res:Response){
        try {
            const { email, token } = req.body
            // Get users
            const users = await AuthController.getUsers();
            
            //Find user
            const userFound = users.find(user => user.getEmail === email);
    
            if (!userFound) {
                return res.status(500).json({ message : "User Not Found"})
            }
            // Check if user ID matches and token is valid
            if (userFound.getId() === token && userFound.getEmail === email) {
              return res.status(200).json({ message: "Token valid" });
          } else {
              return res.status(500).json({ message: "Token invalid" });
          }
        }
        catch (error) {
            res.status(500).json({ message: "Error validating token"})
        }
    }


  //Change Password
    public static async changePassword (req:Request, res:Response){
        try {
            const { email, newPassword } = req.body
            // Get users
            const users = await AuthController.getUsers();

            //Find user
            const userFound = users.find(user => user.getEmail === email);
    
            if (!userFound) {
                return res.status(500).json({ message : "User Not Found"})
            }
            
            // Check userType
            const userType = userFound.getUserType()

            // Change password

            if (userType === "teacher") {
                await TeacherDAO.changePassword(userFound.getId(), newPassword)
            } else {
                const newAssistant = new Assistant(userFound.getName(), userFound.getEmail(), newPassword, userFound.getCampus())
                await AssistantDAO.updateAssistant(userFound.getId(), newAssistant)
            }
            // if userType is teacher use TeacherDAO
            // else use AssistantDAO
        }
        catch (error) {
            res.status(500).json({ message: "Error changing password"})
        }
    }
    
}
