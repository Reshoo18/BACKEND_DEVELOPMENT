import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username:{
    tyoe:String,
    required:true,
    unique:true,
    lowercase:true,
  },
  email:{
    tyoe:String,
    required:true,
    unique:true,
    lowercase:true,
  }, 
  password:{
    type:String,
    required:true,
  }
}, { timestamps: true });

export const User=mongoose.model('User',userSchema)
