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
          <h1>Connect with dentists anytime, anywhere!</h1>
          <p>A supporting statement for your value proposition to encourage customers to complete your CTA.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.scheduleButton}>Schedule an appointment</button>
            <button className={styles.learnButton}>Learn more</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/path-to-your-image.jpg" alt="Hero Image" width={500} height={500} />
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2>Who we are?</h2>
        <p>A few words about your product/offer. Focus on the benefits not the features. Explain how your product will improve your customer's life.</p>
        <button className={styles.scheduleButton}>Schedule an appointment</button>
      </section>

      <section className={styles.doctorsSection}>
        <h2>Meet our doctors</h2>
        <div className={styles.doctorsContainer}>
          <div className={styles.doctorCard}>
            <Image src="/path-to-doctor1.jpg" alt="Doctor 1" width={200} height={200} />
            <h3>Ph.D. Michael Walker</h3>
            <p>Cardiology Specialist</p>
          </div>
          <div className={styles.doctorCard}>
            <Image src="/path-to-doctor2.jpg" alt="Doctor 2" width={200} height={200} />
            <h3>Ph.D. Amanda Baker</h3>
            <p>Anaesthetic Specialist</p>
          </div>
          <div className={styles.doctorCard}>
            <Image src="/path-to-doctor3.jpg" alt="Doctor 3" width={200} height={200} />
            <h3>Ph.D. John Smith</h3>
            <p>Orthopedic Specialist</p>
          </div>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <h2>Show Your Customers Their Needs</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <h3>Step 1</h3>
            <p>Focus on the benefits not the features.</p>
          </div>
          <div className={styles.step}>
            <h3>Step 2</h3>
            <p>A few words about your product/offer.</p>
          </div>
          <div className={styles.step}>
            <h3>Step 3</h3>
            <p>Focus on the benefits not the features.</p>
          </div>
          <div className={styles.step}>
            <h3>Step 4</h3>
            <p>A few words about your product/offer.</p>
          </div>
        </div>
        <button className={styles.scheduleButton}>Schedule an appointment</button>
      </section>

      <section className={styles.callbackSection}>
        <h2>We call you back in</h2>
        <div className={styles.timer}>
          <div className={styles.time}>
            <span>23</span>
            <p>Hours</p>
          </div>
          <div className={styles.time}>
            <span>48</span>
            <p>Minutes</p>
          </div>
          <div className={styles.time}>
            <span>04</span>
            <p>Seconds</p>
          </div>
        </div>
        <form className={styles.callbackForm}>
          <input type="text" placeholder="Name and Surname" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Phone" required />
          <select required>
            <option value="">Select your doctor</option>
            <option value="doctor1">Doctor 1</option>
            <option value="doctor2">Doctor 2</option>
            <option value="doctor3">Doctor 3</option>
          </select>
          <textarea placeholder="Additional message" required></textarea>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent">I agree to receive commercial information from [Company Name]</label>
          </div>
          <button type="submit" className={styles.scheduleButton}>Schedule an appointment</button>
        </form>
      </section>

      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default FindADentist;
