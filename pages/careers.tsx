import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Careers.module.css";
import Header from "./components/Header"; // Ensure you have these components
import Footer from "./components/Footer"; // Ensure you have these components
import Link from "next/link";
import career from "../public/career.jpg";

const Careers = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Careers</title>
        <meta
          name="description"
          content="Join our team and build a rewarding career in healthcare."
        />
      </Head>
      <Header /> {/* Render the Header component */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Join With Us</h1>
          <p>Enrich your healthcare.Live longer</p>
          <div className={styles.buttonContainer}>
            <Link href="/about">
              <button className={styles.applyButton}>View</button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={career}
            alt="About"
            layout="responsive"
            className={styles.mapImage}
          />
        </div>
      </section>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default Careers;
