import mongoose, { Schema } from "mongoose";

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
    // FIXME: check how to do nested schemas
    type: Array,
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
//   "members" : ["member1", "member2", "member3"]
// }
