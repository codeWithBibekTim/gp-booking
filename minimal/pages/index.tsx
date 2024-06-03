// pages/index.tsx
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
