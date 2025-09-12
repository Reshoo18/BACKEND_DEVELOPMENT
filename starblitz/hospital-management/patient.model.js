import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonoseWith: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['m', 'f', 'o'],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HOSPITAL',
    },
  },
  { timestamps: true }
);

export const PATIENT = mongoose.model('PATIENT', patientSchema);
