// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample data (replace this with your database)
let appointments = [];

// Middleware
app.use(bodyParser.json());

// CRUD operations

// Create Appointment
app.post('/api/appointments', (req, res) => {
  const { providerId, userId, appointmentDate } = req.body;
  const newAppointment = {
    id: uuidv4(),
    providerId,
    userId,
    appointmentDate
  };
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
});

// Read Appointments
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

// Update Appointment
app.put('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const { providerId, userId, appointmentDate } = req.body;
  const appointmentIndex = appointments.findIndex(appt => appt.id === id);
  if (appointmentIndex !== -1) {
    appointments[appointmentIndex] = { id, providerId, userId, appointmentDate };
    res.json(appointments[appointmentIndex]);
  } else {
    res.status(404).json({ error: 'Appointment not found' });
  }
});

// Delete Appointment
app.delete('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  appointments = appointments.filter(appt => appt.id !== id);
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
