import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const MEDICAL_RECORD = mongoose.model(
  'MEDICAL_RECORD',
  medicalRecordSchema
);
