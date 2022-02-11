import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import GapeStrip from '../components/GapeStrip';
import Faqs from '../components/Faqs';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';

export default function Home() {
  return (
    <main className='home'>
        <Hero />
        <About />
        <GapeStrip />
        <Faqs />
        <Roadmap />
        <Team />
    </main>
  )
}
