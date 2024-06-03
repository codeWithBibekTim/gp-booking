// pages/api/practitioners.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

// Define the type for the expected response data
type Data = {
  id?: number;
  name?: string;
  speciality?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  try {
    // Extract the specialty from the query parameters
    const { specialty } = req.query;

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: Number(process.env.DB_PORT),
    });

    // Assuming you want to fetch practitioners based on the selected specialty
    const [rows] = await connection.execute(
      'SELECT id, name, speciality FROM practitioners WHERE speciality = ? LIMIT 10',
      [specialty]
    );

    // Check if the connection was successful and the query returned rows
    if (rows.length > 0) {
      console.log('Database connection successful!');
      console.log('Query results:', rows);
      res.status(200).json(rows as Data[]); // Send the result back to the client
    } else {
      console.error('No data found in the database.');
      res.status(404).json([{ error: 'No data found for the selected specialty.' }]);
    }
    connection.end(); // Close the connection
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json([{ error: 'Error connecting to the database.' }]);
  }
}
