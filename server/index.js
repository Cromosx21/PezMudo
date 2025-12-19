import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint para generar el token de pago de Izipay
app.post('/api/create-payment', async (req, res) => {
  try {
    const { amount, currency, email, orderId } = req.body;

    // Credenciales de Izipay desde .env
    const username = process.env.IZIPAY_USERNAME;
    const password = process.env.IZIPAY_PASSWORD;
    const endpoint = process.env.IZIPAY_ENDPOINT || 'https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment';

    if (!username || !password) {
      return res.status(500).json({ error: 'Faltan credenciales de Izipay' });
    }

    const auth = Buffer.from(`${username}:${password}`).toString('base64');

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Izipay usa centavos
        currency: currency || 'PEN',
        orderId: orderId,
        customer: {
          email: email,
        },
      }),
    });

    const data = await response.json();

    if (data.status === 'SUCCESS') {
      res.json({ formToken: data.answer.formToken });
    } else {
      console.error('Izipay Error:', data);
      res.status(500).json({ error: 'Error al crear el pago en Izipay', details: data });
    }
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
