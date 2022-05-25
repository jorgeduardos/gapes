import React from "react";
import gape from "../assets/gapes/gape-1.png";

export default function About() {
  return (
    <section className="about">
      <div className="inner">
        <div className="container">
          <div className="img-container">
            <img src={gape} alt="Galactic Ape chimp" />
          </div>
          <div className="text-container">
            <h2 className="is-aqua h3">What are Galactic Apes?</h2>
            <p>
              Prep your crews, assemble your ships and reclaim the universe for
              the glory of the apes. Only the most worthy and greatest of all
              apes will rescue their allies from war-torn planets, colonize new
              worlds and loot treasure from rich deposits in the deepest reaches
              of space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
