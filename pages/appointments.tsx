import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/AlliedHealth.module.css';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import axios from 'axios';

const AlliedHealth = () => {
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); 

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Get form values
    const name = event.currentTarget.querySelector('input[name="name"]').value;
    const email = event.currentTarget.querySelector('input[name="email"]').value;
    const phone = event.currentTarget.querySelector('input[name="phone"]').value;
    const provider = event.currentTarget.querySelector('select[name="provider"]').value;
    const message = event.currentTarget.querySelector('textarea[name="message"]').value;

    try {
      // Send POST request to the API
      const response = await axios.post('/api/appointments', {
        name,
        email,
        phone,
        provider,
        message,
      });

      // Parse the response data
      const data = JSON.parse(response.data);

      // Check if the appointment was created successfully
      if (data.success) {
        setAppointmentSubmitted(true);
      } else {
        setErrorMessage(data.message); 
      }
    } catch (error) {
      console.error('Error submitting appointment request:', error);
    }
  };

  return (
    <div className={styles.pageContainer}>
     
      <Header />
          <section className={styles.appointmentSection}>
        <h2>Schedule an Appointment</h2>
        <form className={styles.appointmentForm} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name and Surname" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <input type="tel" name="phone" placeholder="Phone" required />
          <select name="provider" required>
            <option value="">Select a Provider</option>
            <option value="allied-health">Allied Health Provider</option>
            <option value="physiotherapist">Physiotherapist</option>
            <option value="doctor">Doctor</option>
            <option value="dentist">Dentist</option>
            <option value="other">Other</option>
          </select>
          <textarea name="message" placeholder="Additional message" required />
          <button type="submit" className={styles.submitButton}>Request Appointment</button>
        </form>
        {appointmentSubmitted && (
          <p className={styles.successMessage}>Appointment request submitted successfully!</p>
        )}
        {errorMessage && (
          <p className={styles.errorMessage}>Error: {errorMessage}</p> 
        )}
      </section>

      <Footer />
    </div>
  );
};

export default AlliedHealth;