import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/AlliedHealth.module.css';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import axios from 'axios';

const AlliedHealth = () => {
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);

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

      // Check if the appointment was created successfully
      if (response.status === 201 && response.headers.success === 'true') {
        setAppointmentSubmitted(true);
      } else {
        console.error('Error submitting appointment request:', response.data);
      }
    } catch (error) {
      console.error('Error submitting appointment request:', error);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Allied Health</title>
        <meta name="description" content="Find an allied health provider near you" />
      </Head>
      <Header />
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Find the Care You Need</h1>
          <p>From specialty condition and treatment to everyday needs.</p>
          <button className={styles.servicesButton}>Our Services</button>
        </div>
        <div className={styles.heroImage}>
          <Image src="/physiotherapist.jpg" alt="Hero Image" layout="responsive" width={500} height={500} />
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h2>Our Allied Health Providers</h2>
          <p>
            Choose the Provider for Your Loved One
            For rare diseases, treatments, and procedures to basic goods and services.
          </p>
          <button className={styles.infoButton}>Providers</button>
        </div>
        <div className={styles.infoCard}>
          <h2>Our Location</h2>
          <p>Search our locations to find the one nearest you.</p>
          <button className={styles.infoButton}>Directions and Parking</button>
        </div>
        <div className={styles.infoCard}>
          <h2>Appointments</h2>
          <p>Call 844-453-3778 or click to request a same-day appointment.</p>
          <button className={styles.infoButton}>Request an Appointment</button>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2>Why Choose Our Allied Health Services?</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutItem}>
            <h3>More Experience</h3>
            <p>Be confident in the treatment plan and your provider's abilities.</p>
          </div>
          <div className={styles.aboutItem}>
            <h3>The Right Answers</h3>
            <p>Get the answers and assurance you deserve with accuracy you can trust.</p>
          </div>
          <div className={styles.aboutItem}>
            <h3>Seamless Care</h3>
            <p>We're committed to delivering compassionate healthcare.</p>
          </div>
          <div className={styles.aboutItem}>
            <h3>Unparalleled Expertise</h3>
            <p>Don't doubt that you are getting the expert care that you deserve.</p>
          </div>
        </div>
        <button className={styles.aboutButton}>About Us</button>
      </section>

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
          <p>Appointment request submitted successfully!</p>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default AlliedHealth;