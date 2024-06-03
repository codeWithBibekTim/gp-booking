import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import styles from "../styles/About.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import about_Banner from "../public/about_banner.jpg";

const About = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="GP consultation and Booking website"
        />
      </Head>
      <Header />

      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <Link href="/">Home</Link>
        <span>/ About Us</span>
      </nav>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>GP Consultation and Booking is here for you</h1>
          <p>
            We link you to the quality Doctors.Be with us and make sure
            you wont be disapointed.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/login">
              <button className={styles.primaryButton}>Make Appointment</button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={about_Banner}
            alt="About"
            layout="responsive"
            className={styles.mapImage}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
