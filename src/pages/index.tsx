import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>Portfolio 🚀</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Exprerience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </div>
  );
}
