// pages/ListYourPractice.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from '../styles/ListYourPractice.module.css'; // Import CSS module for styling

const ListYourPractice = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>List your Practice</h1>
        <div className={styles.content}>
          <h2>Benefits of Listing Your Practice</h2>
          <ul>
            <li>Attract new patients</li>
            <li>Showcase your expertise</li>
            <li>Expand your reach</li>
          </ul>
          <h2>Steps to List Your Practice</h2>
          <ol>
            <li>Create an account</li>
            <li>Provide practice details</li>
            <li>Submit for review</li>
          </ol>
          <h2>Requirements</h2>
          <ul>
            <li>Valid professional credentials</li>
            <li>Accurate contact information</li>
            <li>High-quality images of your practice</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListYourPractice;
