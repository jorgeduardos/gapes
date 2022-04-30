import { React, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import laser from "../assets/laser.png";
import gape from "../assets/no-laser-gape.png";
import littleKing from "../assets/little-king.png";

import shipyard from "../assets/spacechip-scene.gif";
import missions from "../assets/cargo-scene.gif";
import metaverse from "../assets/landing-scene.gif";

export default function Roadmap() {
  gsap.registerPlugin(ScrollTrigger);

  // store a reference to the box div
  const screenRef = useRef(null);
  const scrollRef = useRef(null);

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(screenRef.current, {
      xPercent: -100,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top bottom",
        end: "+=1300 bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="roadmap">
      <div className="laser-gape" ref={scrollRef}>
        <img src={gape} alt="" />
        <img src={laser} alt="" className="laser" />
        <div className="screen" ref={screenRef}></div>
      </div>

      <div className="full">
        <h2 className="is-ethno">
          ROADMAP
          <img src={littleKing} alt="" />
        </h2>
      </div>

      <div className="inner">
        <p className="is-yellow is-text-center ">
          Your apes are not just a crew that will take you on missions
          throughout the Galactic Apes universe, but the start of a journey that
          will open the door to nft’s of all types and the Galactic Apes
          expansion into the Metaverse. There will be new collections, new
          artists, and your crew(s) will be your key to it all.
        </p>
      </div>

      <div className="phase one">
        <img src={shipyard} alt="Galactic Shipyard" />
        <h3 className="is-ethno is-yellow">PHASE ONE</h3>
        <p>Activate the Galactic Shipyard</p>
      </div>

      <div className="phase two">
        <img src={missions} alt="Galactic Shipyard" />
        <h3 className="is-ethno is-yellow">PHASE TWO</h3>
        <p>Activate Missions</p>
      </div>

      <div className="phase three">
        <img src={metaverse} alt="Galactic Shipyard" />
        <h3 className="is-ethno is-yellow">BEYOND</h3>
        <p>Enter the metaverse</p>
      </div>
    </section>
  );
}
