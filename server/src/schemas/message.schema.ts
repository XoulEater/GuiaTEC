import mongoose, { Schema } from "mongoose";

// Define the schema for the messages and replies in forums
const messageSchema: Schema = new Schema({
    user: {
        // Emisor of the message
        type: String,
        required: true,
    },

    date: {
        // Start date of the message
        type: Date,
        required: true,
    },

    content: {
        // Content of the message
        type: String,
        required: true,
    },
});

export default mongoose.model("Message", messageSchema);
