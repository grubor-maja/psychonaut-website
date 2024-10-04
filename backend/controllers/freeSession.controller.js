import mongoose from "mongoose";
import {FreeSession, validateSession} from "../models/freeSession.model.js";

export const getAllFreeSessions = async(req,res) => {
    try {
        const sessions = await FreeSession.find();
        res.status(200).json({success:true,data:sessions});
            
    } catch (error) {
        res.status(500).send({success: false, message: 'Server error'});      
    }

}
export const createFreeSession = async(req,res) => {
    try {
        const {error} = validateSession(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        
        
        const newSession = new FreeSession(req.body);
        await newSession.save();

        res.status(201).json({success:true, message:'Session booked successfully'});
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Session already booked for this date and time'
            });
        }
        res.status(500).send({success: false, message: 'Server error'});
    }
}
export const deleteFreeSession = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedSession = await FreeSession.findByIdAndDelete(id);
        if(!deletedSession) {
            return res.status(404).json({success:false, message:"Free session with given id not found"});
        }
        res.status(200).json({success:true,message:'Free session deleted successfully'});
            
    } catch (error) {
        res.status(500).send({success: false, message: 'Server error'}); 
    }
}