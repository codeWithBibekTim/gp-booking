import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

// Define the type for the expected response data
type Data = {
  success: boolean;
  message?: string;
  error?: string;
  role?: string; // Include role in the response
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Establish database connection
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: Number(process.env.DB_PORT),
      });

      // Fetch the user from the database (select email and password)
      const [userData] = await connection.execute(
        'SELECT email, password, role FROM users WHERE email = ?',
        [email]
      );

      connection.end(); // Close the connection

      if (userData.length === 0) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }

      const user = userData[0];

      // Compare passwords directly
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }

      // Respond with success and role
      return res.status(200).json({ success: true, role: user.role });
    } catch (error) {
      console.error('Error logging in:', error);
      return res.status(500).json({ success: false, message: 'Error logging in' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}