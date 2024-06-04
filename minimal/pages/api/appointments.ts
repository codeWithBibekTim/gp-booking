import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

// Define the type for the expected response data
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
    const { name, email, phone, provider, message } = req.body;

    // Basic validation (you'll likely want more robust validation in a real application)
    if (!name || !email || !phone || !provider || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: Number(process.env.DB_PORT),
      });

      // Find the provider by name (assuming 'provider' is the provider's name)
      const [providerData] = await connection.execute(
        'SELECT id FROM providers WHERE specialization = ?',
        [provider]
      );

      if (providerData.length === 0) {
        return res.status(400).json({ success: false, message: 'Provider not found' });
      }

      const providerId = providerData[0].id; // Extract the provider ID

      // Check if the user exists in the 'users' table
      const [userData] = await connection.execute(
        'SELECT id FROM users WHERE email = ?',
        [email]
      );

      if (userData.length === 0) {
        // User doesn't exist, return 'Please Register' message
        res.setHeader('success', 'false'); 
        return res.status(401).json({ success: false, message: 'Please Register' });
      } 

      // Insert the new appointment into the database
      const [result] = await connection.execute(
        'INSERT INTO appointments (user_id, provider_id, appointment_date, cover_letter, created_at) VALUES (?, ?, ?, ?, NOW())',
        [1, providerId,  new Date(), message] // Use current date instead of hardcoded date
      );

      // Check if the insertion was successful
      if (result.affectedRows > 0) {
        res.setHeader('success', 'true'); // Set success header
        return res.status(201).json({ success: true, message: 'Appointment request submitted successfully' });
      } else {
        res.setHeader('success', 'false'); // Set error header
        return res.status(500).json({ success: false, message: 'Failed to create appointment' });
      }

      connection.end(); // Close the connection
    } catch (error) {
      console.error('Error connecting to the database:', error);
      res.setHeader('success', 'false'); // Set error header
      return res.status(500).json({ success: false, message: 'Failed to create appointment' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}