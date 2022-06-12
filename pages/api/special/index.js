import Dbconnection from "../../../utils/conn";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doez" });
}
