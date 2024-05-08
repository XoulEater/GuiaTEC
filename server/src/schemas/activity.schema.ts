import mongoose, { Schema } from "mongoose";
import forumSchema from "./forum.schema";

const activitySchema: Schema = new Schema({
  name: {
    // Name of the activity
    type: String,
    required: true,
  },

  week: {
    // Week of the activity
    type: Number,
    required: true,
  },

  date: {
    // Start date of the activity
    type: Date,
    required: true,
  },

  prevDays: {
    // Publish date of the activity
    type: Number,
    required: true,
  },

  reminderInterval: {
    // Notification interval of the activity
    type: Number,
    required: true,
  },

  type: {
    // Type of the activity
    type: String,
    required: true,
  },

  responsibles: {
    // Responsibles of the activity
    type: [String],
    required: true,
  },

  attachementFile: {
    // Attachements of the activity
    type: String,
    required: true,
  },

  modality: {
    // Modality of the activity
    type: String,
    required: true,
  },

  link: {
    // Link of the activity
    type: String,
    required: true,
  },

  status: {
    // Status of the activity
    type: String,
    required: true,
  },

  forum: {
    // Forum of the activity
    type: forumSchema,
    required: true,
  },
});
// Create and export the Teacher model
export default activitySchema;


// {
//   "name" : "Test Activity Tres",
//   "week": 12,
//   "date": "2024-04-29T12:00:00.000Z",
//   "prevDays" : 3,
//   "reminderInterval": 1,
//   "responsibles": ["John Doe", "Jane Smith"],
//   "type" : "Test",
//   "modality": "Online",
//   "status": "Active",
//   "link": "https://example.com",
//   "attachmentFile": "test.pdf",
//   "forum": "https://example.com/forum"
// }

