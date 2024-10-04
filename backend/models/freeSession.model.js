import mongoose from "mongoose";
import Joi from "joi";

const FreeSessionSchema = mongoose.Schema({
    firstName: {
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
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export function validateSession(session) {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(255).required(),
        lastName: Joi.string().min(2).max(255).required(),
        email: Joi.string().min(5).max(255).required().email(),
        phone: Joi.string().pattern(/^[0-9+\-() ]+$/).required(),
        date: Joi.date().required()
    });
    return schema.validate(session);
}

export const FreeSession = mongoose.model('FreeSession',FreeSessionSchema);

