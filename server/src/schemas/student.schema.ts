import mongoose, { Schema, SchemaTypes } from "mongoose";

// Define the student schema
const studentSchema: Schema = new Schema({
  carnet: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  personalPNumber: { type: String, required: true },
  campus: { type: String, required: true },
  password: { type: String, required: false },
});

// Create and export the student model
export default mongoose.model("Student", studentSchema);
