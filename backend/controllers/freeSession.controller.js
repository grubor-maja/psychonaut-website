import mongoose from "mongoose";
import FreeSession from "../models/freeSession.model.js";

export const getAllFreeSessions = async(req,res) => {

}
export const createFreeSession = async(req,res) => {
    try {
        const {firstName,lastName,email,phone,date} = req.body;
        const newSession = new FreeSession({firstName,lastName,email,phone,date});
        await newSession.save();
        res.status(201).json({success:true, message:'Session booked successfully'});
    } catch (error) {
        res.status(500).send({success: false, message: 'Server error'});
    }
}
export const deleteFreeSession = async(req,res) => {
    
}