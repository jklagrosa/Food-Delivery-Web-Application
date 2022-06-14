import Dbconnection from "../../../utils/conn";
import Dish from "../../../models/dish";
import Wishlist from "../../../models/wishlist";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await Dbconnection();
    const GET_ALL_WISHLIST = await Wishlist.find({});
    if (!GET_ALL_WISHLIST) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      data: GET_ALL_WISHLIST,
    });
  }

  if (req.method === "POST") {
    await Dbconnection();

    const { id } = req.body;

    const CHECK_IF_EXIST = await Wishlist.findOne({ _id: id });
    if (CHECK_IF_EXIST) {
      console.log("PRODUCT ALREADY EXIST!");
      return res.status(200).json({
        exist: true,
      });
    }

    const FIND_PRODUCT = await Dish.findOne({ _id: id });
    if (!FIND_PRODUCT) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    const product_added = new Wishlist({
      _id: FIND_PRODUCT._id,
      title: FIND_PRODUCT.title,
      cuisine: FIND_PRODUCT.cuisine,
      ratings: FIND_PRODUCT.ratings,
      course: FIND_PRODUCT.course,
      price: FIND_PRODUCT.price,
      desc1: FIND_PRODUCT.desc1,
      img: FIND_PRODUCT.img,
    });

    product_added
      .save()
      .then(() => {
        console.log("NEW PRODUCT ADDED TO WISHLIST");
        return res.status(200).json({
          success: true,
          data: FIND_PRODUCT,
        });
      })
      .catch(() => {
        return res.status(400).json({
          success: false,
          data: null,
        });
      });
  }
}
