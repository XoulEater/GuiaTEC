import mongoose, { Schema } from "mongoose";

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
    type: String,
    required: true,
  },
});
// Create and export the Teacher model
export default activitySchema;

// {
//   "name" : "Test Activity",
//   "description": "This is a test activity",
//   "startDate": new Date(),
//   "publishDate" : new Date(),
//   "notificationInterval": 1,
//   "type" : "Test",
//   "responsibles": ["John Doe", "Jane Smith"],
//   "attachement": "test.pdf",
//   "modality": "Online",
//   "link": "https://example.com",
//   "status": "Active",
//   "forum": "https://example.com/forum"
// };
