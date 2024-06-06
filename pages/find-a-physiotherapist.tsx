import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/FindAPhysiotherapist.module.css';
import Header from './components/Header'; // Ensure you have these components
import Footer from './components/Footer'; // Ensure you have these components
import physiotherapist from "../public/physiotherapist.jpg";

const FindAPhysiotherapist = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Find a Physiotherapist</title>
        <meta name="description" content="Find a physiotherapist near you" />
      </Head>
      <Header /> {/* Render the Header component */}
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Find the Care You Need</h1>
          <p>From specialty condition and treatment to everyday needs.</p>
          <button className={styles.servicesButton}>Our Services</button>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={physiotherapist}
            alt="About"
            layout="responsive"
            className={styles.mapImage}
          />
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h2>Our Physiotherapists</h2>
          <p>Select a physiotherapist and schedule an appointment.</p>
          <button className={styles.infoButton}>Physiotherapists</button>
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
        <h2>Why Choose Our Healthcare Clinic?</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutItem}>
            <h3>More Experience</h3>
            <p>Be confident in the treatment plan and your physiotherapist's abilities.</p>
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

      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default FindAPhysiotherapist;
