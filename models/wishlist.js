import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema({
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
  img: {
    type: String,
  },
});

mongoose.models = {};

export default mongoose.model("WishList", wishlistSchema);
