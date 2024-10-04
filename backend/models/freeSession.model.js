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
    time: {
        type: String,
        required: true,
        enum: [
            '10:00', '11:00', '12:00', '13:00', '14:00', 
            '15:00', '16:00', '17:00', '18:00', '19:00'
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

FreeSessionSchema.index({ date: 1, time: 1 }, { unique: true });

export function validateSession(session) {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(255).required(),
        lastName: Joi.string().min(2).max(255).required(),
        email: Joi.string().min(5).max(255).required().email(),
        phone: Joi.string().pattern(/^[0-9+\-() ]+$/).required(),
        date: Joi.date().required(),
        time: Joi.string().valid(
            '10:00', '11:00', '12:00', '13:00', '14:00', 
            '15:00', '16:00', '17:00', '18:00', '19:00'
        ).required()
    });
    return schema.validate(session);
}

export const FreeSession = mongoose.model('FreeSession',FreeSessionSchema);

