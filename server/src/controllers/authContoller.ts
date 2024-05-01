import AssistantDAO from '../DAOs/assistant'; // Asegúrate de usar la ruta correcta
import TeacherDAO from '../DAOs/teacher';
import { Request, Response } from "express";
import User from 'model/User';
import Email from './sendEmail';
export class AuthController{

    public static async login (req:Request, res:Response){
        try {
            const { email, password } = req.body
            // Find user
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
            // Compare password
            const isCorrect = userFound.getPassword === password;
            if (!isCorrect) {
                return res.status(500).json({message: "Password incorrecta" })
            }
            
            // Send user in response
            res.status(200).json(userFound)
        }
        catch (error) {
            res.status(500).json({ message: "Error login"})
        }
    }
    
    public static async test (){

        const email = new Email()
        await email.sendMail("mariana.viquez.monge@gmail.com", "hola","prueba");
        console.log("correo enviado")
    }
    





}

