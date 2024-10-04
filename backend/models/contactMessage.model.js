import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema({
    firstName:  {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const ContactMessage = mongoose.model('ContactMessage',ContactMessageSchema);

export default ContactMessage;