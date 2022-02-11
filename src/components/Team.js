import React from 'react';

import dots from '../assets/gapes/dots.png';
import dilly from '../assets/gapes/dilly-b.png';
import kyle from '../assets/gapes/kyle.png';
import twitterFill from '../assets/icons/twitter-fill.svg';

export default function Team() {
  return (
    <section className="team">
        <div className="inner">
            <h2 className="is-arcade h3">MEET THE TEAM</h2>
            <div className="team-container">
                <div className="member">
                    <img src={dots} alt="Dots" />
                    <h3>Dots</h3>
                    <a href="https://twitter.com/ohDotss" target="_blank" rel='noreferrer'><img src={twitterFill} className='twitter-img' alt="Dots twitter" /></a>
                </div>
                <div className="member">
                    <img src={dilly} alt="Dilly" />
                    <h3>Dilly</h3>
                    <a href="https://twitter.com/DillyDilly_eth" target="_blank" rel='noreferrer'><img src={twitterFill} className='twitter-img' alt="Dilly twitter" /></a>
                </div>
                <div className="member">
                    <img src={kyle} alt="Kyle" />
                    <h3>Kyle</h3>
                    <a href="https://twitter.com/kylelovestacos1" target="_blank" rel='noreferrer'><img src={twitterFill} className='twitter-img' alt="Kyle twitter" /></a>
                </div>
            </div>
        </div>
    </section>
  )
}
