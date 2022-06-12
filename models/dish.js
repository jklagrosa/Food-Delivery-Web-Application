import mongoose from "mongoose";

const dishSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc1: {
    type: String,
    required: true,
  },
  desc2: {
    type: String,
    required: true,
  },
  ing: [String],
  nut: [String],
  qty: {
    type: Number,
    default: 1,
  },
  cat: {
    type: String,
  },
  img: {
    type: String,
  },
});

mongoose.models = {};

export default mongoose.model("Foods", dishSchema);
