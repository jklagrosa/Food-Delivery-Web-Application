import Dbconnection from "../../../utils/conn";
import User from "../../../models/user";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await Dbconnection();

    const { username, password } = req.body;

    const FIND_USER = await User.findOne({
      username: username,
      password: password,
    });
    if (!FIND_USER) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      data: FIND_USER,
    });
  }
}
