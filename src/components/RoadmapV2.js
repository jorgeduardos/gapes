import { React, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import laser from '../assets/laser.png';
import gape from '../assets/no-laser-gape.png';
import littleKing from '../assets/little-king.png';

//roadmap v2 assets
// import tic from '../assets/roadmap/tic.png';
// import hat from '../assets/roadmap/party-hat.png';
import baldie from '../assets/roadmap/baldie.png';
import genesis from '../assets/roadmap/genesis.png';
import spaceship from '../assets/roadmap/spaceship.png';
import planet from '../assets/roadmap/planet.png';

import gapesLeft from '../assets/roadmap/apes_monkes_left.png';
import gapesRight from '../assets/roadmap/apes_monkes_right.png';

export default function RoadmapV2(props) {
    gsap.registerPlugin(ScrollTrigger);

    // store a reference to the box div
    const screenRef = useRef(null);
    const scrollRef = useRef(null);

    const spaceshipScrollRef = useRef(null);
    const spacesheepRef = useRef(null);

    const planetScrollRef = useRef(null);
    const planetRef = useRef(null);

    // wait until DOM has been rendered
    useEffect(() => {

        gsap.to(screenRef.current, {
            xPercent: -100,
            scrollTrigger: {
                trigger: scrollRef.current,
                start: "top bottom",
                end: "+=1300 bottom",
                scrub: true,
            }
        });

        gsap.to(spacesheepRef.current, {
            right: 0,
            scrollTrigger: {
                trigger: spaceshipScrollRef.current,
                start: "80% bottom",
                end: "+=1300 50%",
                scrub: true,
                onUpdate: self => {
                    if (self.direction === -1) {
                        gsap.set(spacesheepRef.current, { scaleX: -1 })
                    } else {
                        gsap.set(spacesheepRef.current, { scaleX: 1 })
                    }
                },
            }
        });

        gsap.to(planetRef.current, {
            left: 0,
            rotate: 100,
            scrollTrigger: {
                trigger: planetScrollRef.current,
                start: "80% bottom",
                end: "+=1300 50%",
                scrub: true,
            }
        });
    }, []);

    return (
        <section className="roadmapV2">
            <div className="laser-gape" ref={scrollRef}>
                <img src={gape} alt="" />
                <img src={laser} alt="" className='laser' />
                <div className="screen" ref={screenRef}></div>
            </div>

            <div className="full" id='roadmap'>
                <h2 className='is-ethno'>R<span>O<img src={littleKing} alt="" /></span>ADMAP</h2>
            </div>

            <div className="inner yellow">
                <p className='is-yellow is-text-center '>Your apes are not just a crew that will take you on missions throughout the Galactic Apes universe, but the start of a journey that will open the door to nft’s of all types and the Galactic Apes expansion into the Metaverse. There will be new collections, new artists, and your crew(s) will be your key to it all.</p>
            </div>

            <div className="phases-container inner">
                <div className="phase one" ref={spaceshipScrollRef}>
                    <div className="container">
                        <h4 className='is-aqua'><span>1</span> Foundation: brand Initiatives</h4>
                        <ol>
                            <li>Establish new team for GalacticApes</li>
                            <li> Secure GalacticApes discord</li>
                            <li>Establish new moderator team</li>
                            <li>Re-engage Allowlist Raffles</li>
                            <li>Claim new domain name</li>
                            <li>"Space Base" Town Hall</li>
                        </ol>
                        <div className="phase-img">
                            <img src={baldie} alt="St. Baldie" />
                        </div>
                    </div>

                    <div className="dotted-container">
                        <div className='top'></div>
                        <div className='middle'></div>
                        <div className='bottom'></div>
                        <img ref={spacesheepRef} src={spaceship} alt="" />
                    </div>
                </div>

                <div className="phase two" ref={planetScrollRef}>
                    <h4 className='is-pink'><span>2</span> Deliberation: Technical</h4>
                    <ol>
                        <li>Secure GalacticApes contract and IP</li>
                        <li> Secure legal council for new entity </li>
                        <li>Website Migration</li>
                        <li>Create new social media accounts</li>
                        <li>Gamification/Tokenomics</li>
                    </ol>
                    <div className="phase-img">
                        <img src={genesis} alt="Genesis" />
                    </div>


                    <div className="dotted-container">
                        <div className='top'></div>
                        <div className='middle'></div>
                        <div className='bottom'></div>
                        <img src={planet} ref={planetRef} alt="" />
                    </div>
                </div>

                <div className="phase three">
                    <h4 className='is-green'><span>3</span> Exploration: in progress</h4>
                    <ol>
                        <li>Community DAO</li>
                        <li>VX Development</li>
                        <li>Land and Metaverse integration</li>
                        <li>IRL/Metaverse Merch</li>
                        <li>Charity/Community Auctions</li>
                        <li>Expanded Media Presence</li>
                    </ol>
                </div>
            </div>

            <div className="gooh-container">
                <div>
                    <img src={gapesLeft} alt="" />
                    <h4>GOOOOOOOH!</h4>
                    <img src={gapesRight} className='right' alt="" />
                </div>
            </div>
        </section>
    )
}
