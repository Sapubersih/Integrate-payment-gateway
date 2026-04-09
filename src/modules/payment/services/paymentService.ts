import { snap } from "../../../core/config/midtrans";

export class PaymentService {
  async createTransaction(orderId: string, amount: number) {
    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: amount,
      },
      credit_card: {
        secure: true,
      },
    };

    const transaction = await snap.createTransaction(parameter);

    return {
      token: transaction.token,
      redirect_url: transaction.redirect_url,
    };
  }
}
