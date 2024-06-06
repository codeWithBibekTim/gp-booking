import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

// Define the type for the expected response data
type Data = {
  success: boolean;
  message?: string;
  error?: string;
  token?: string;
  userId?: number; // Add userId to the response
  role?: string;
};

// Example secret key (replace with a more secure key in production)
const SECRET_KEY = 'Test';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Assuming NextAuth.js sends the email and password in the request body
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

      // Fetch the user from the database
      const [userData] = await connection.execute(
        'SELECT id, password FROM users WHERE email = ?',
        [email]
      );

      connection.end(); // Close the connection

      if (userData.length === 0) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }

      const user = userData[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });

      // Respond with success and token (and user ID for NextAuth.js)
      return res.status(200).json({ success: true, token, userId: user.id, role: user.role }); 
    } catch (error) {
      console.error('Error logging in:', error);
      return res.status(500).json({ success: false, message: 'Error logging in' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}