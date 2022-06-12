import Dbconnection from "../../utils/conn";
import Food from "../../models/dish";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await Dbconnection();
    const data = req.body;
    const new_data = new Food(data);
    new_data
      .save()
      .then((result) => {
        res.status(200).json({
          success: true,
          data: result,
        });
      })
      .catch((e) => {
        res.status(400).json({
          success: false,
          error: e,
        });
      });
  }
}
