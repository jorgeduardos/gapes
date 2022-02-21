import React from 'react'

export default function FaqMonkes() {
  return (
    <section className="faqs" id='faqs'>
        <div className="inner">
            <h2 className="is-ethno is-text-center">FAQ</h2>
            <div className="faqs-container">
                <div className="item">
                    <h3 className="h5 is-yellow">How much do they cost and what is the total supply?</h3>
                    <p className='is-small'>The total GalacticMonke supply available for claim is 10,150. They are free to claim (plus gas) for every GalacticApe you hold (1 GalacticApe = 1 monke claim).</p>
                    <br/>
                    <p className='is-small'>GalacticApes can only be used ONE TIME to claim a GalacticMonke, so make sure to use this tool to check the claimability status of a GalacticApe before purchasing one on the secondary market.</p>
                </div>
                <div className="item">
                    <h3 className="h5 is-aqua">GalacticMonke Breeding (Why, how and when?)</h3>
                    <p className='is-small'>Why/When: The goal of breeding as a function will be used to grow the GalacticApes userbase and scale the universe/ecosystem as a whole in the future. Until breeding can be utilized in a sustainable/beneficial/actionable way to further those goals, monke breeding will remain inactive.</p>
                    <br/>
                    <p className='is-small'>How: Only Genesis GalacticMonkes will be breedable (the initial 10,150 supply). You will need at least 2 GalacticMonkes of the same genus to breed and create a new Monke.</p>
                </div>
                <div className="item">
                    <h3 className="h5 is-green">What part do Monkes play in missions?</h3>
                    <p className='is-small'>There will be different mission types with different requirements. Missions that will require apes and monkes to participate, missions that will require only an ape crew to participate and missions that will require a monke crew only to participate.</p>
                </div>
                <div className="item">
                    <h3 className="h5 is-pink">What is the best Monke crew mix to have?</h3>
                    <p className='is-small'>The four crew types from most to least advantageous will be:</p>
                    <ul>
                        <li>5 Monkes total (all different genus)</li>
                        <li>5 Monkes total (any genus mix)</li>
                        <li>3 Monkes total (all different genus)</li>
                        <li>3 Monkes total (any genus mix)</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
