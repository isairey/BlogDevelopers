import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    await resend.emails.send({
      from: "DevBlog <onboarding@resend.dev>",
      to: email,
      subject: "¡Bienvenido a DevBlog!",
      html: `
        <h1>Gracias por suscribirte 🚀</h1>
        <p>Recibirás artículos cada semana.</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Error enviando correo" });
  }
});

app.listen(3001, () => {
  console.log("Servidor en http://localhost:3001");
});