import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.author || !data.id) {
      return res.status(400).json({ message: "No author or ID" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        to: data.author,
        subject: "🎉Tu escrito se ha publicado🎉",
        html: `<h1>¡Enhorabuena, tu escrito ha sido aceptado!</h1></br><p>Ahora formas parte de la comunidad <a href="www.sinautores.com" target="_blank">SinAutores.com</a></p><br><p>Puedes visitar y compartir tu escrito haciendo <a href="www.sinautores.com/${data.id}">click aquí</a></p><br><h3>Muchas gracias por formar parte de nuestra comunidad de Héroes Anónimos</h3><br><p>Atentamente, el equipo de SinAutores.com</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: error.message });
};

export default handler;
