import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/login');
    }
  }, [status, router]);

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}