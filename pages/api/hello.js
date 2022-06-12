import Dbconnection from "../../utils/conn";
import Food from "../../models/dish";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await Dbconnection();
    const getAll = await Food.find({});
    if (!getAll) {
      return res.status(400).json({
        success: false,
        error: "POTANGINA NO DATA!",
      });
    }

    return res.status(200).json({
      success: true,
      data: getAll,
    });
  }

  if (req.method === "POST") {
    await Dbconnection();
    const data = req.body;
    const new_data = new Food(data);
    const wew = new_data.save();
    if (wew) {
      return res.status(200).json({
        success: true,
        data: wew,
      });
    }

    return res.status(400).json({
      success: false,
      error: "POTANGINA NO DATA!",
    });
  }
}
