import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Dentists.module.css';
import Header from './components/Header'; // Ensure you have these components
import Footer from './components/Footer'; // Ensure you have these components
import doc from "../public/dentist.jpg";

const Dentists = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors and filter dentists
    fetch('/api/doctors') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        const dentistsList = data.filter(doctor => doctor.specialization === 'Dentist');
        setDentists(dentistsList);
      })
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Dentists</title>
        <meta name="description" content="Find a dentist near you" />
      </Head>
      <Header /> {/* Render the Header component */}
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Are you looking for Dentists?</h1>
          <p>Find and solve your problems.</p>
          <button className={styles.servicesButton}>Our Services</button>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={doc}
            alt="About"
            layout="responsive"
            className={styles.mapImage}
          />
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h2>Our Dentists</h2>
          <p>Select a dentist and schedule an appointment.</p>
          <button className={styles.infoButton}>Dentists</button>
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
      <section className={styles.appointmentSection}>
        <h2>Book an Appointment</h2>
        <form className={styles.appointmentForm}>
          <input type="text" placeholder="Name and Surname" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Phone" required />
          <select required>
            <option value="">Select a Provider</option>
            <option value="dentist">Dentist</option>
            <option value="doctor">Doctor</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Additional message" required></textarea>
          <button type="submit" className={styles.submitButton}>Request Appointment</button>
        </form>
      </section>

      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default Dentists;
