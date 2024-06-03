import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

let users = [
  { id: 1, email: 'admin@example.com', passwordHash: bcrypt.hashSync('password', 10), role: 'admin' },
  { id: 2, email: 'user@example.com', passwordHash: bcrypt.hashSync('password', 10), role: 'user' },
];

const SECRET_KEY = 'your_secret_key';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });

    return res.status(200).json({ success: true, token, role: user.role });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
