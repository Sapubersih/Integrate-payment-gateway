import express from "express";
import { createPaymentController } from "../controllers/paymentController";

const router = express.Router();

router.post("/create", createPaymentController);

export default router;
