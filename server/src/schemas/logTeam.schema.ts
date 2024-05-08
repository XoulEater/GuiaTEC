import mongoose, { Schema } from "mongoose";

// Define the schema for the messages and replies in forums
const logTeam: Schema = new Schema({
  agenteCambio: {
    type: String,
    required: true,
  },
  sujetoReceptor: {
    type: String,
    required: true,
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