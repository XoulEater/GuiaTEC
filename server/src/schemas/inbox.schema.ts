import mongoose, { Schema } from "mongoose";

const inboxSchema: Schema = new Schema({
  listId: {
    // Unique identifier of the list
    type: Set,
    required: true,
  },

});

export default inboxSchema;
