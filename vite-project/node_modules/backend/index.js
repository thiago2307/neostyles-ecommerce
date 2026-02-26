// backend/index.js
const express = require("express");
const cors = require("cors");
const { MercadoPagoConfig } = require("mercadopago");

const app = express();
app.use(express.json());

// 🔹 CORS configurado para React localhost
app.use(
  cors({
    origin: ["http://localhost:5173"], // tu frontend React
    methods: ["GET", "POST", "OPTIONS"],
  })
);

// Opcional: aceptar preflight para cualquier ruta
app.options("*", cors());

// 🔑 SDK Mercado Pago v2
const client = new MercadoPagoConfig({
  accessToken: "APP_USR-7504466624696734-021919-392ce8f4e081077504713dd4ae8d8d87-3215703514"
});

// 🛒 Endpoint para crear la preferencia de pago
app.post("/pago", async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: "Mi producto",
          quantity: 1,
          unit_price: 100,
        },
      ],
      back_urls: {
        success: "https://TU_NGROK_URL/pago-exitoso",
        failure: "https://TU_NGROK_URL/pago-fallido",
        pending: "https://TU_NGROK_URL/pago-pendiente",
      },
      auto_return: "approved",
    };

    const response = await client.preferences.create(preference);
    console.log("RESPUESTA MP:", response.body);

    res.json({ init_point: response.body.init_point });
  } catch (error) {
    console.error("ERROR MP DETALLE:", error.response ? error.response.body : error);
    res.status(500).json({ error: error.response ? error.response.body : error.message });
  }
});

// ✅ Redirecciones de prueba back_urls
app.get("/pago-exitoso", (req, res) => res.send("✅ Pago aprobado!"));
app.get("/pago-fallido", (req, res) => res.send("❌ Pago fallido!"));
app.get("/pago-pendiente", (req, res) => res.send("⏳ Pago pendiente!"));

// 🔔 Webhook para recibir notificaciones
app.post("/webhook", (req, res) => {
  console.log("📩 Notificación recibida:", req.body);
  res.status(200).send("OK");
});

// ⚡ Servidor corriendo
app.listen(3001, () => console.log("✅ Backend corriendo en http://localhost:3001"));