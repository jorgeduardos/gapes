import { React, useEffect, useState } from "react";

import heroVideo from "../assets/homepage-hero-video.mp4";
import cityAudio from "../assets/audio/city.mp3";

import speaker from "../assets/icons/speaker-white.png";

export default function Hero() {
  const [audio, setAudio] = useState(false);

  function audioChange() {
    let audioF = document.getElementById("audioFile");
    audioF.play();
    audioF.muted = audio;

    setAudio(!audio);
  }

  useEffect(() => {
    let audioF = document.getElementById("audioFile");
    audioF.volume = 0.05;
  });

  return (
    <section className="hero">
      <audio id="audioFile">
        <source src={cityAudio} type="audio/mp3" />
      </audio>
      <video autoPlay playsInline loop muted src={heroVideo}></video>
      <div className={`speaker-container ${audio ? "" : "muted"}`}>
        <img src={speaker} alt="Mute/Unmute" onClick={() => audioChange()} />
      </div>
    </section>
  );
}
