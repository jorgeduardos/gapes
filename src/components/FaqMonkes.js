import React from 'react'

export default function FaqMonkes() {
  return (
    <section className="faqs" id='faqs'>
        <div className="inner">
            <h2 className="is-ethno is-text-center">FAQ</h2>
            <div className="faqs-container">
                <div className="item">
                    <h3 className="h5 is-yellow">What are GalacticMonkes?</h3>
                    <p className='is-small'>The GalacticMonkes were a free to claim collection for GalacticApe holders with a 1:1 supply ratio over a 30 day window. 9156 monkes were claimed and are now available on <a href="https://opensea.io/collection/galacticmonkes" target="_blank">OpenSea</a>.</p>
                </div>
                <div className="item">
                    <h3 className="h5 is-green">What part do Monkes play in missions?</h3>
                    <p className='is-small'>While their true purpose is currently classified, the monkes will have a necessary role in helping ape crews prepare for galactic exploration.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
