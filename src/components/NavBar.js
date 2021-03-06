import { React, useState } from "react";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import twitterLogo from "../assets/icons/twitter.svg";
import discordLogo from "../assets/icons/discord.svg";
import osLogo from "../assets/icons/opensea.svg";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import gapesLogo from "../assets/main-gapes-logo.png";
import monkesLogo from "../assets/logo-gapes-blue.png";

gsap.registerPlugin(ScrollToPlugin);

export default function NavBar() {
  const [navState, setNavState] = useState(false);

  const path = useLocation().pathname;
  const location = path.split("/")[1];

  function scroll(e) {
    e.preventDefault();
    let target = e.target.getAttribute("href");
    setNavState(!navState);
    gsap.to(window, {
      duration: 0.3,
      scrollTo: target,
      ease: "none",
    });
  }

  return (
    <div className="nav-wrapper">
      {location !== "migration" && (
        <Link to="/">
          <img
            className="logo"
            src={location === "monke" ? monkesLogo : gapesLogo}
            alt="Galactic Apes"
          />
        </Link>
      )}

      <nav className="main-nav">
        <div className={`links ${navState ? "active" : ""}`}>
          {/* <Link onClick={scroll} to={location === 'monke' ? '/#roadmap' : '#roadmap'}>Roadmap</Link> */}

          {location === "monke" || location === "migration" ? (
            <Link to="/#roadmap">Roadmap</Link>
          ) : (
            <a onClick={scroll} href="#roadmap">
              Roadmap
            </a>
          )}

          {location === "migration" ? (
            <Link to="/#faqs">FAQs</Link>
          ) : (
            <a onClick={scroll} href="#faqs">
              FAQs
            </a>
          )}

          {location === "migration" ? (
            <Link to="/#team">Team</Link>
          ) : (
            <a onClick={scroll} href="#team">
              Team
            </a>
          )}

          <Link to="/migration" onClick={() => setNavState(!navState)}>
            Migration
          </Link>
          <Link
            to={location === "monke" ? "/" : "/monke"}
            onClick={() => setNavState(!navState)}
          >
            {location === "monke" ? "Ape" : "Monke"}
          </Link>
        </div>

        <div className="logos">
          <a
            href="https://twitter.com/TheGalacticApes"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterLogo} alt="Twitter" />
          </a>
          <a
            href="https://discord.gg/galacticapes"
            target="_blank"
            rel="noreferrer"
          >
            <img src={discordLogo} alt="Discord" />
          </a>
          <a
            href={
              location === "monke"
                ? "https://opensea.io/collection/galacticmonkes"
                : "https://opensea.io/collection/galacticapes"
            }
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={osLogo}
              alt={
                location === "monke"
                  ? "Galactic Monkeys Open Sea"
                  : "Galactic Apes Open Sea"
              }
            />
          </a>
        </div>
        <div
          className={`hamburger ${navState ? "active" : ""}`}
          onClick={() => setNavState(!navState)}
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </nav>
    </div>
  );
}
