import React from 'react';
import Head from 'next/head';
import styles from '../styles/FindADoctor.module.css';
import Header from './components/Header'; // Ensure you have these components
import Footer from './components/Footer'; // Ensure you have these components
import Hero from './components/Hero';

const FindADoctor = () => {
  return (
    <div className={styles.pageContainer}>
      <Header /> {/* Render the Header component */}
     
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <Hero />
        </div>
      </section>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default FindADoctor;
