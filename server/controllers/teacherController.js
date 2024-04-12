const { model } = require('mongoose');
const Teacher = require('../schemas/teacherSchema');

// Ver profesores
const getTeachers = async (req, res) => {
  const teachers = await Teacher.find({}).sort({ createdAt: -1 });
  res.status(200).json(teachers);

}
// Registrar profesor

const registerTeacher = async (req, res) => {
  const { code, officeNumber, personalNumber, photo, campus, isLeader } = req.body;
  try {
    const teacher = await Teacher.create({ code, officeNumber, personalNumber, photo, campus, isLeader });
    res.status(200).json(teacher);

  } catch (error) {
    res.json({ message: error });
  }
}


// Actualizar profesor

// Eliminar profesor

module.exports = {  
  registerTeacher
};