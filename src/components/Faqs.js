import React from "react";

export default function Faqs() {
  return (
    <section className="faqs" id="faqs">
      <div className="inner">
        <h2 className="is-ethno is-text-center">FAQ</h2>
        <div className="faqs-container">
          <div className="item">
            <h3 className="h5 is-yellow">
              How much do they cost and what is the total supply?
            </h3>
            <p className="is-small">
              The total supply of apes is 9,999 with a mint cost of .08Ξ per
              ape.
            </p>
          </div>
          <div className="item">
            <h3 className="h5 is-aqua">What are missions?</h3>
            <p className="is-small">
              Missions are the gamification mechanism for the Galactic Apes
              universe. With your crew(s), you will be able to complete missions
              to yield various rewards.
            </p>
          </div>
          <div className="item">
            <h3 className="h5 is-green">
              Will I need more than one ape to run missions?
            </h3>
            <p className="is-small">
              In order to run missions you will need a crew, and there will be
              significant advantages depending on your crew mix.
            </p>
          </div>
          <div className="item">
            <h3 className="h5 is-pink">What is the best crew mix to have?</h3>
            <p className="is-small">
              The three crew types from most to least advantageous will be:
            </p>
            <ul>
              <li>3 Galactic Apes total with 1 of each genus</li>
              <li>3 Galactic Apes total with any mix</li>
              <li>2 Galactic Apes total with any mix</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
