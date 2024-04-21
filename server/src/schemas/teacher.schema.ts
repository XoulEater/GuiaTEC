import mongoose, { Schema } from "mongoose";

// Define the schema for the Teacher collection
const teacherSchema: Schema = new Schema({
  id: {
    // Code of the teacher (e.g. AL-01), includes the campus code
    type: String,
    required: true,
    unique: true,
  },
  name: {
    // Name of the teacher
    type: String,
    required: true,
  },
  email: {
    // Email of the teacher
    type: String,
    required: true,
    unique: true,
  },
  password: {
    // Password of the teacher
    type: String,
    required: true,
  },
  photo: {
    // Photo of the teacher (URL)
    type: String,
    required: false,
  },
  officePNumber: {
    // Office phone number of the teacher
    type: String,
    required: true,
  },
  personalPNumber: {
    // Personal phone number of the teacher
    type: String,
    required: true,
  },
  isLeader: {
    // Indicates if the teacher is the leader of the team
    type: Boolean,
    required: true,
  },
  campus: {
    // Campus of the teacher
    type: String,
    required: true,
  },
});
// Create and export the Teacher model
export default mongoose.model("Teacher", teacherSchema);
