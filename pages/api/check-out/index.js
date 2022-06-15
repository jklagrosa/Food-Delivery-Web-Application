import Dbconnection from "../../../utils/conn";
import Dish from "../../../models/dish";
import Cart from "../../../models/cart";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await Dbconnection();

    const CHECK_OUT = await Cart.deleteMany({});
    if (!CHECK_OUT) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      data: CHECK_OUT,
    });
  }
}
