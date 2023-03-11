import { Request, Response } from "express";

export const searchUser = async (req: Request, res: Response) => {
  try {
    const userName = req.params.userName;
    // const users = await User.find();
    console.log(userName);
    res.json({ name: "Ankit", age: 25, country: "India", query: userName });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};
