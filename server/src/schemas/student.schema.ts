import mongoose, { Schema, SchemaTypes } from "mongoose";

// Define the student schema
const studentSchema: Schema = new Schema({
  carnet: { type: SchemaTypes.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  campus: { type: String, required: true },
});

// Create and export the student model
export default mongoose.model("Student", studentSchema);
