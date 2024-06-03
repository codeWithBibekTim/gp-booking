import React from 'react';
import Head from 'next/head';
import styles from '../styles/FindADoctor.module.css';
import Header from './components/Header'; // Ensure you have these components
import Footer from './components/Footer'; // Ensure you have these components

const FindADoctor = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Find a Doctor</title>
        <meta name="description" content="Find a doctor near you" />
      </Head>
      <Header /> {/* Render the Header component */}
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Find a Doctor!</h1>
          <p>Ridiculus sociosqu cursus neque ante scelerisque vehicula.</p>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Ex. Name, Specialization..." className={styles.searchInput} />
            <button className={styles.searchButton}>Search</button>
          </div>
          <div className={styles.filterButtons}>
            <button className={styles.filterButton}>All</button>
            <button className={styles.filterButton}>Doctor</button>
            <button className={styles.filterButton}>Clinic</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          {/* Replace with your actual image path */}
          <img src="/path-to-your-image.jpg" alt="Medical Illustration" className={styles.image} />
        </div>
      </section>

      <section className={styles.infoSection}>
        <h2>Discover the Online Appointment!</h2>
        <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <h3>Find a Doctor</h3>
            <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri in eum omnes molestie.</p>
          </div>
          <div className={styles.infoCard}>
            <h3>View Profile</h3>
            <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri in eum omnes molestie.</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Book a Visit</h3>
            <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri in eum omnes molestie.</p>
          </div>
        </div>
        <button className={styles.findDoctorButton}>Find Doctor</button>
      </section>

      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default FindADoctor;
