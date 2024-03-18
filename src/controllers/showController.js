import db from "../models/index.js";
import { createClient } from "redis";
const showContoller = async (req, res) => {
  try {
    const cluster = createClient({ url: process.env.REDIS });

    cluster.on("error", (err) => console.log("Redis Cluster Error", err));

    await cluster.connect();

    const cache = await cluster.get("table");

    if (cache != null) {
      return res.status(200).json({
        status: "success (data from cache)",
        data: JSON.parse(cache),
      });
    }
    const data = await db.code.findAll();

    await cluster.setEx("table", 3600, JSON.stringify(data));

    return res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

export default showContoller;
