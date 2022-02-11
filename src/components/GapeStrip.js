import React from 'react';
import gape1 from '../assets/gapes/res.png'
import gape2 from '../assets/gapes/scrap.png'
import gape3 from '../assets/gapes/gape-6.png'
import gape4 from '../assets/gapes/biggie.png'

export default function GapeStrip() {
  return (
    <section className="gape-strip">
        <div>
            <div className="img-container">
                <img src={gape1} alt="" />
            </div>
            <div className="img-container">
                <img src={gape2} alt="" />
            </div>
            <div className="img-container">
                <img src={gape3} alt="" />
            </div>
            <div className="img-container">
                <img src={gape4} alt="" />
            </div>
        </div>
    </section>
  )
}
