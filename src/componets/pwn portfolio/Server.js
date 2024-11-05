// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Set up your email transport using your email provider
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider (like Gmail)
  auth: {
    user: 'your-email@gmail.com', // Your email address
    pass: 'your-email-password', // Your email password (use app password if 2FA is enabled)
  },
});

// Endpoint to send email
app.post('/send-email', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Email from Form',
    text: `Hello, you have submitted the email: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
