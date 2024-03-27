import express from "express";
import { google, signin, signup,logoutUser } from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post('/google',google)
router.get('/logout',verifyToken , logoutUser )
export default router;