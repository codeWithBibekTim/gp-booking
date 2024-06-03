import React from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact information for our website" />
      </Head>
      <Header /> {/* Render the Header component */}
      <h1 className={styles.contactHeading}>How can we help?</h1>
      <p className={styles.subHeading}>Send us a message!</p>
      <div className={styles.contactForm}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="interestedIn">I am interested in learning more about...</label>
            <select id="interestedIn" name="interestedIn" required>
              <option value="service1">Personal Health Care</option>
              <option value="service2">Learning about Healthy Fooding Habits</option>
              <option value="service3">Having an appoinment to the Doctor</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </div>
        </form>
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default Contact;
