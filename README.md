This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About Project :eyes:
POC for sending email messages using the [**Nodemailer**](https://nodemailer.com/about/) module for Node.js.
The project by default uses **gmail** as a service and **OAuth** security which has been configured in the [Google Cloud Platform](https://console.cloud.google.com/home) as can be seen in the transporter object:
```sh
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
```
but you can easily change it and use the [configuration](https://nodemailer.com/smtp/) with your custom domain info(host, port, user and password):
```sh
const transporter = nodemailer.createTransport({
    host: 'something.yourdomain.com',
    port: 465,
    secure: true
    auth: {
      user: 'username@yourdomain.com', // your domain email address
      pass: 'password' // your password
    }
  });
```
> And now you are ready to go :rocket: :rocket: :rocket:

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
