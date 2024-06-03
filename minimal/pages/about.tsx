import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import styles from '../styles/About.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import about_Banner from '../public/about_banner.jpg';

const About = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="GP consultation and Booking website" />
      </Head>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <Link href="/">Home</Link>
        <span>/ About Us</span>
      </nav>
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Quality Doctor For Your Health Care</h1>
          <p>We make sure you never lose hope.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>Make Appointment</button>
            <button className={styles.secondaryButton}>Watch Video</button>
          </div>
        </div>
        <div className={styles.heroImage}>
        <Image src={about_Banner} alt="About" layout="responsive" className={styles.mapImage} />
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.serviceCard}>
          <h2>Dentistry</h2>
          <p>We are an educational award-winning dental clinic that personalizes dental care with a passion.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Neurology</h2>
          <p>A practice neural & management evaluation for complicated neurological issues with a neurologist.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Eye Care</h2>
          <p>Our expert eye doctors and optometrists can diagnose eye diseases and treat vision issues.</p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2>The Unknown Is Just A Question, We Find The Answers.</h2>
        <p>Getting an accurate diagnosis can be one of the most impactful experiences that you can have - especially if you've been in search of that answer for a while. We can help you get there.</p>
        <button className={styles.primaryButton}>Find Out More</button>
        <div className={styles.aboutImage}>
          <Image src={'/public/about_banner.jpg'} alt="About Us Image" layout="responsive" width={500} height={500} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
