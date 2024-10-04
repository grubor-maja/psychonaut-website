import mongoose from "mongoose";
import ContactMessage from "../models/contactMessage.model.js";

export const getAllContactMessages = async(req,res) => {

}
export const createContactMessage = async(req,res) => {
    try {
        const {firstName, lastName, email, message} = req.body;
        const newMessage = new ContactMessage({firstName, lastName, email, message});
        await newMessage.save();
        res.status(201).json({success: true, message: 'Message sent successfully'});
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error'});
    }    
}
export const deleteContactMessage = async(req,res) => {
    
}