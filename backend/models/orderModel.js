import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  personCount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

export const Orders = mongoose.model("Orders", orderSchema);
