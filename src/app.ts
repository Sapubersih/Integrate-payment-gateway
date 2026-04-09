import express from "express";
import paymentRoutes from "./modules/payment/routes/paymentRoutes";

const app = express();

app.use(express.json());
app.use("/payment", paymentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});
