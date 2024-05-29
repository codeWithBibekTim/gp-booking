// Import necessary modules
import mysql from 'mysql';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Parse the DATABASE_URL
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error('DATABASE_URL is not defined in the environment variables');
  process.exit(1);
}

// Extract the connection information using a URL parsing method (e.g., a library or custom logic)
const connectionConfig = new URL(databaseUrl);
const connection = mysql.createConnection({
  host: connectionConfig.hostname,
  user: connectionConfig.username,
  password: connectionConfig.password,
  database: connectionConfig.pathname.split('/')[1], // Removes the leading slash of the pathname
  port: connectionConfig.port ? parseInt(connectionConfig.port) : 3306
});

// Connect to the database
connection.connect(err => {
  if (err) {
    return console.error('An error occurred while connecting to the database:', err);
  }
  console.log('Connected to the MySQL server.');
});

// Perform a query
const query = 'SELECT * FROM User';  // Replace 'yourTableName' with your actual table name
connection.query(query, (err, results, fields) => {
  if (err) {
    return console.error('An error occurred while executing the query:', err);
  }
  console.log('Results:', results);
});

// Close the connection
connection.end();
