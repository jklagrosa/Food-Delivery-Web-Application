import Dbconnection from "../../../utils/conn";
import Dish from "../../../models/dish";
import Cart from "../../../models/cart";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await Dbconnection();

    const { id } = req.body;
    const FIND_ITEM = await Cart.findOne({ _id: id });
    if (!FIND_ITEM) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    const UPDATE_CART_ITEM = await Cart.findOneAndUpdate(
      { _id: FIND_ITEM._id },
      { $inc: { qty: 1 } },
      { new: true }
    );
    if (!UPDATE_CART_ITEM) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    console.log("ITEM INCREMENTED!");

    // const GET_ALL_CART_ITEMS = await Cart.find({});
    // if (!GET_ALL_CART_ITEMS) {
    //   return res.status(400).json({
    //     success: false,
    //     data: null,
    //   });
    // }

    return res.status(200).json({
      success: true,
      data: UPDATE_CART_ITEM,
    });

    // const { id } = req.body;
    // const FIND_PRODUCT = await Cart.findOneAndDelete({ _id: id });
    // if (!FIND_PRODUCT) {
    //   return res.status(400).json({
    //     success: false,
    //     data: null,
    //   });
    // }

    // const GET_ALL_UPDATE_PRODUCTS = await Cart.find({});
    // if (!GET_ALL_UPDATE_PRODUCTS) {
    //   return res.status(400).json({
    //     success: false,
    //     data: null,
    //   });
    // }

    // console.log("Product Deleted From Cart");

    // return res.status(200).json({
    //   success: true,
    //   data: GET_ALL_UPDATE_PRODUCTS,
    // });
  }
}
