import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: "TU_ACCESS_TOKEN"
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/pago", async (req, res) => {
  const preference = {
    items: req.body.items
  };

  const response = await mercadopago.preferences.create(preference);
  res.json({ id: response.body.id });
});

app.listen(3001, () => console.log("Server listo"));