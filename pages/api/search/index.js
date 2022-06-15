import Dbconnection from "../../../utils/conn";
import Dish from "../../../models/dish";
import Cart from "../../../models/cart";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await Dbconnection();
    const { title } = req.body;

    const GET_RESULTS = await Dish.find({
      title: { $regex: title, $options: "i" },
    });
    if (!GET_RESULTS) {
      return res.status(404).json({
        results: false,
      });
    }

    return res.status(200).json({
      results: true,
      data: GET_RESULTS,
    });
  }

  if (req.method === "GET") {
    await Dbconnection();

    const SEARCH_PRODUCT = await Dish.find({});
    if (!SEARCH_PRODUCT) {
      return res.status(404).json({
        results: false,
      });
    }

    return res.status(200).json({
      results: true,
      data: SEARCH_PRODUCT,
    });
  }
}
