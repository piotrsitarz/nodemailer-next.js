import nodemailer from "nodemailer";

export default function handler({ body: { user, userMail, message } }, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: userMail,
    subject: "nodemailer POC",
    html: `
      <div style="text-align:center;">
        <h1 style="color:#3399ff;">Hello ${user}!</h1>
        <h2 style="color:#00ff7f;">To da Moon! :}</h2>
        <p style="color:#808080;">${message}</p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      const successMessage = "Email sent successfully";

      console.log(successMessage);
      res.status(200).send(successMessage);
    }
  });
}
