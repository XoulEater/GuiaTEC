import mongoose, { Schema } from "mongoose";
import Teacher from "./teacher.schema";

const teamSchema: Schema = new Schema({
  id: {
    // Code of the teacher (e.g. AL-01), includes the campus code
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  workPlans: {
    // FIXME: check how to do nested schemas
    type: Array,
    required: false,
  },

  members: {
    type: [Schema.Types.ObjectId],
    ref: 'Teacher', // This should match the name you used when creating the Teacher model
    required: true,
  },
});
// Create and export the Teacher model
export default mongoose.model("Team", teamSchema);

// {
//   "id" : "T1",
//   "name" : "Team 1",
//   "description" : "This is the first team",
//   "workPlans" : ["WP1", "WP2"],
//   "members" : [{
//   "name" : "Teacher 1",
//   "email" : "hola@gmail.com  ",  
//   "password" : "12345",
//   "photo" : "https://images.pexels.com",
//   "officePNumber" : "123456",
//   "personalPNumber" : "123456",
//   "isLeader" : false,
//   "campus" : "AL"
// }]
// }
