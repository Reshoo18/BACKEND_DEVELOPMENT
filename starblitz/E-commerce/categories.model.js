import mongoose from 'mongoose';

const categorySchem = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose('Category', categorySchem);
