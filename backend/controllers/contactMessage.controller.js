import mongoose from "mongoose";
import  { ContactMessage,validateMessage } from "../models/contactMessage.model.js";

export const getAllContactMessages = async(req,res) => {

    try {
        const messages = await ContactMessage.find();
        res.status(200).json({success:true, data:messages});        
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error'});    
    }
}
export const createContactMessage = async(req,res) => {
    try {
        const {error} = validateMessage(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const newMessage = new ContactMessage(req.body);
        await newMessage.save();
        res.status(201).json({success: true, message: 'Message sent successfully'});
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error'});
    }    
}
export const deleteContactMessage = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedMessage = await ContactMessage.findByIdAndDelete(id);
        if(!deletedMessage) {
            return res.status(404).json({success:false, message:"Contact message with given id not found"});
        }
        res.status(200).json({success:true,message:'Contact message deleted successfully'});
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error'});
        
    }
}