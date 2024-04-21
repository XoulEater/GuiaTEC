import mongoose, { Schema, SchemaTypes } from "mongoose";
//import Activity from "./activitySchema.ts"; 

// Define the schema for the Teacher collection
const workplanSchema: Schema = new Schema({
    
    name: {
      // Name of the workplan
      type: String,
      required: true,
    },
    description: {
      // description of the workplan
      type: String,
      required: true,
    },
    activities: [{
      // Array of activities within the workplan
      type: Schema.Types.ObjectId,
      ref: 'Activity',
      required: true,
    }],
    year: {
      // year of the workplan
      type: Number,
      required: true,
    },
    semester: {
      // semester of the workplan
      type: Number,
      required: true,
    },
  });
  // Create and export the Workplan model
  export default mongoose.model("Workplan", workplanSchema);
  