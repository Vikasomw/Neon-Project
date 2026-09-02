import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Schedule from './components/Schedule';
import Signup from './components/Signup';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Schedule />
        <Signup />
      </main>
      <Footer />
    </>
  );
}
