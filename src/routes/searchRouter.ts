import express from "express";
import { searchUser } from "../controllers/searchController";

const router = express.Router();

// Route to get all users
router.get("/:userName", searchUser);

export default router;
