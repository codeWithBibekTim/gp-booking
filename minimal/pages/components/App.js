import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/global.css'; // Import global CSS file

const App = () => {
  const [appointments, setAppointments] = useState([]);
  
  // Fetch appointments when the component mounts
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <div>Provider ID: {appointment.providerId}</div>
            <div>User ID: {appointment.userId}</div>
            <div>Date: {appointment.appointmentDate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
