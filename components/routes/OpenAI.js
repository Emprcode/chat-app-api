import express from "express";

import axios from "axios";

const router = express.Router();

router.post("/text", async (req, res) => {
  try {
    const { text, activeChat } = req.body;
  } catch (error) {
    console.error("error:", error);
    res.json({
      status: "505",
      message: error.message,
    });
  }
});

export default router;
