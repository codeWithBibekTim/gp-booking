// pages/api/password-reset.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

const users = []; // This should be replaced with your database logic

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
    const resetLink = `http://localhost:3000/reset-password?token=${token}`;

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Password Reset',
      text: `Click the link to reset your password: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ success: false, message: 'Error sending email' });
      }
      return res.status(200).json({ success: true, message: 'Password reset link sent' });
    });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
