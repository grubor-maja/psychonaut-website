import mongoose from "mongoose";
import Joi from "joi";

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

export function validateMessage(message) {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(255).required(),
        lastName: Joi.string().min(2).max(255).required(),
        email: Joi.string().min(5).max(255).required().email(),
        message: Joi.string().max(5000)
    });

    return schema.validate(message);
}

export const ContactMessage = mongoose.model('ContactMessage',ContactMessageSchema);
