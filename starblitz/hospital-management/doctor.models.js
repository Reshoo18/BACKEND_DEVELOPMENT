import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,

  },
  salary:{
    type:String,
    required:true,

  },
  qualifiction:{
    type:String,
    required:true,
  },
  experienceInYears:{
    type:Number,
    default:0
  },
  worksInHospitals:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"HOSPITAL",
    },
  ],
}, { timestamps: true });

export const DOCTOR = mongoose.model('DOCTOR', doctorSchema);
