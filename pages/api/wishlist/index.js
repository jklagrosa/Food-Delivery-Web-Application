import Dbconnection from "../../utils/conn";
import Dish from "../../models/dish";
import Wishlist from "../../models/wishlist";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await Dbconnection();
  }
}
