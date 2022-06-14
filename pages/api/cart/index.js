import Dbconnection from "../../../utils/conn";
import Dish from "../../../models/dish";
import Cart from "../../../models/cart";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await Dbconnection();
    const GET_ALL_CART = await Cart.find({});
    if (!GET_ALL_CART) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      data: GET_ALL_CART.reverse(),
    });
  }

  if (req.method === "POST") {
    await Dbconnection();

    const { id } = req.body;

    const CHECK_IF_EXIST = await Cart.findOne({ _id: id });
    if (CHECK_IF_EXIST) {
      console.log("PRODUCT ALREADY IN CART!");
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

    const product_added = new Cart({
      _id: FIND_PRODUCT._id,
      title: FIND_PRODUCT.title,
      cuisine: FIND_PRODUCT.cuisine,
      ratings: FIND_PRODUCT.ratings,
      course: FIND_PRODUCT.course,
      price: FIND_PRODUCT.price,
      img: FIND_PRODUCT.img,
      qty: FIND_PRODUCT.qty,
    });

    product_added
      .save()
      .then(() => {
        console.log("NEW PRODUCT ADDED TO YOUR CART");
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
