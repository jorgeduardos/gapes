import { React } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import GapeStrip from '../components/GapeStrip';
import Faqs from '../components/Faqs';
// import Roadmap from '../components/Roadmap';
import RoadmapV2 from '../components/RoadmapV2';
import Team from '../components/Team';


export default function Home(props) {

  return (
    <main className='home'>
      <Hero />
      <About />
      <GapeStrip />
      <Faqs />
      {/* <Roadmap /> */}
      <RoadmapV2 />
      <Team />
    </main>
  )
}
