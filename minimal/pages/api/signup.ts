import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

let users = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password, role } = req.body;

    if (users.some(user => user.email === email)) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const passwordHash = bcrypt.hashSync(password, 10);
    const newUser = { id: users.length + 1, email, passwordHash, role };
    users.push(newUser);

    return res.status(201).json({ success: true, message: 'User created successfully' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
