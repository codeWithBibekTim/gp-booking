import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/FindADentist.module.css';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component

const FindADentist = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Find a Dentist</title>
        <meta name="description" content="Find a Dentist" />
      </Head>
      <Header /> {/* Render the Header component */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Feel free to connect with dentists anytime, anywhere!</h1>
          <p>We are here for your service.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.scheduleButton}>Schedule an appointment</button>
            <button className={styles.learnButton}>Learn more</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/dentist.jpg" alt="Hero Image" width={500} height={500} />
        </div>
      </section>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default FindADentist;
