import express, { Request, Response } from "express";

const router = express.Router();

// Route to get all users
router.get("/search", async (_req: Request, res: Response) => {
  try {
    // const users = await User.find();
    res.json({ name: "Ankit", age: 25, country: "India" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

export default router;
