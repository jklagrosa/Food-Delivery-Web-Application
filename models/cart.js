import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
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
  img: {
    type: String,
  },
  qty: {
    type: Number,
    default: 1,
  },
});

mongoose.models = {};

export default mongoose.model("Cart", cartSchema);
