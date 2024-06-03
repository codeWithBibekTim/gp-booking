import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Careers.module.css';
import Header from './components/Header'; // Ensure you have these components
import Footer from './components/Footer'; // Ensure you have these components

const Careers = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Join our team and build a rewarding career in healthcare." />
      </Head>
      <Header /> {/* Render the Header component */}
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Join Our Team</h1>
          <p>Build a rewarding career in healthcare. Make a difference in people's lives every day.</p>
          <button className={styles.applyButton}>View Open Positions</button>
        </div>
        <div className={styles.heroImage}>
          <Image src="/path-to-your-hero-image.jpg" alt="Career Hero Image" layout="responsive" width={500} height={500} />
        </div>
      </section>

      <section className={styles.opportunitiesSection}>
        <h2>Career Opportunities</h2>
        <div className={styles.opportunityCard}>
          <h3>Medical Assistant</h3>
          <p>Assist doctors and nurses in providing quality patient care. Responsibilities include taking vitals, preparing patients for exams, and maintaining records.</p>
          <button className={styles.applyButton}>Apply Now</button>
        </div>
        <div className={styles.opportunityCard}>
          <h3>Registered Nurse</h3>
          <p>Provide direct patient care in various medical settings. Responsibilities include administering medications, monitoring patient progress, and educating patients and families.</p>
          <button className={styles.applyButton}>Apply Now</button>
        </div>
        <div className={styles.opportunityCard}>
          <h3>Healthcare Administrator</h3>
          <p>Oversee the administrative operations of healthcare facilities. Responsibilities include managing staff, developing policies, and ensuring compliance with regulations.</p>
          <button className={styles.applyButton}>Apply Now</button>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <h2>Benefits of Working with Us</h2>
        <ul className={styles.benefitsList}>
          <li>Competitive salary and benefits</li>
          <li>Opportunities for career advancement</li>
          <li>Comprehensive health insurance</li>
          <li>Flexible working hours</li>
          <li>Supportive and inclusive work environment</li>
        </ul>
      </section>

      <section className={styles.applicationSection}>
        <h2>Apply Now</h2>
        <form className={styles.applicationForm}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <select required>
            <option value="">Position Applying For</option>
            <option value="medical-assistant">Medical Assistant</option>
            <option value="registered-nurse">Registered Nurse</option>
            <option value="healthcare-administrator">Healthcare Administrator</option>
          </select>
          <textarea placeholder="Cover Letter" required></textarea>
          <button type="submit" className={styles.submitButton}>Submit Application</button>
        </form>
      </section>

      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default Careers;
