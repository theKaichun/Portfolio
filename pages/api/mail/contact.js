import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, phone, service, message } = req.body;

    console.log(process.env.GMAIL_USER);
    console.log(process.env.GMAIL_PASS);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `來自 ${firstname} ${lastname} 的新聯絡請求`,
        html: `
          <p><strong>名字：</strong> ${firstname} ${lastname}</p>
          <p><strong>電子郵件：</strong> ${email}</p>
          <p><strong>電話：</strong> ${phone}</p>
          <p><strong>服務：</strong> ${service}</p>
          <p><strong>訊息：</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: "郵件發送成功" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "郵件發送時發生錯誤", ...error });
    }
  } else {
    res.status(405).json({ error: "不允許的請求方法" });
  }
}
