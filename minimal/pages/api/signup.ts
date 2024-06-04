import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

type Data = {
  success: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, password, role } = req.body;

    // Basic validation
    if (!email || !password || !role) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
      // Connect to the database
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: Number(process.env.DB_PORT),
      });

      // Check if the user already exists
      const [existingUser] = await connection.execute(
        'SELECT 1 FROM users WHERE email = ?',
        [email]
      );

      if (existingUser.length > 0) {
        return res.status(400).json({ success: false, message: 'User already exists' });
      }

      // Hash the password
      const passwordHash = bcrypt.hashSync(password, 10);

      // Insert the new user into the database
      const [result] = await connection.execute(
        'INSERT INTO users (email, password, role) VALUES (?, ?, ?)',
        [email, passwordHash, role]
      );

      // Check if the insertion was successful
      if (result.affectedRows > 0) {
        return res.status(201).json({ success: true, message: 'User created successfully' });
      } else {
        return res.status(500).json({ success: false, message: 'Failed to create user' });
      }

      // Close the database connection
      connection.end();
    } catch (error) {
      console.error('Error connecting to the database:', error);
      return res.status(500).json({ success: false, message: 'Failed to create user' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}