import { Request, Response } from "express";
import { PaymentService } from "../services/paymentService";

const paymentService = new PaymentService();

export const createPaymentController = async (req: Request, res: Response) => {
  try {
    const { orderId, amount } = req.body;

    const result = await paymentService.createTransaction(orderId, amount);

    res.json(result);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
