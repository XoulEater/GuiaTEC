import mongoose, { Schema } from "mongoose";

const inboxSchema: Schema = new Schema({
  notifications: { type: [Number], required: true },
  readNotifications: { type: [Number], required: true },
});

export default inboxSchema;
