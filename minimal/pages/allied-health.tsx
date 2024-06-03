import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/AlliedHealth.module.css';
import Header from './components/Header'; // Ensure you have these components
import Footer from './components/Footer'; // Ensure you have these components

const AlliedHealth = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Allied Health</title>
        <meta name="description" content="Find an allied health provider near you" />
      </Head>
      <Header /> {/* Render the Header component */}
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Find the Care You Need</h1>
          <p>From specialty condition and treatment to everyday needs.</p>
          <button className={styles.servicesButton}>Our Services</button>
        </div>
        <div className={styles.heroImage}>
          <Image src="/path-to-your-image.jpg" alt="Hero Image" layout="responsive" width={500} height={500} />
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h2>Our Allied Health Providers</h2>
          <p>Choose the Provider for Your Loved One
For rare diseases, treatments, and procedures to basic goods and services.</p>
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
        <form className={styles.appointmentForm}>
          <input type="text" placeholder="Name and Surname" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Phone" required />
          <select required>
            <option value="">Select a Provider</option>
            <option value="allied-health">Allied Health Provider</option>
            <option value="physiotherapist">Physiotherapist</option>
            <option value="doctor">Doctor</option>
            <option value="dentist">Dentist</option>
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

export default AlliedHealth;
