import mongoose, { Schema } from "mongoose";
import { teacherSchema } from "./teacher.schema";

// Define the schema for the messages and replies in forums
const logTeam: Schema = new Schema({
  agenteCambio: {
    type: String,
    required: true,
  },
  // TODO: Add after and before the change
  antes: {
    type: teacherSchema,
    required: false,
  },
  despues: {
    type: teacherSchema,
    required: false,
  },
  accion: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("LogTeam", logTeam);
