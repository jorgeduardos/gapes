import React from "react";
import gape1 from "../assets/gapes/res.png";
import gape2 from "../assets/gapes/scrap.png";
import gape3 from "../assets/gapes/gape-6.png";
import gape4 from "../assets/gapes/biggie.png";

import gape5 from "../assets/gapes/heatah.png";
import gape6 from "../assets/gapes/juco.png";
// import gape7 from '../assets/gapes/gape-3.png'
// import gape8 from '../assets/gapes/gape-4.png'

// import gape9 from '../assets/gapes/gape-5.png'
// import gape10 from '../assets/gapes/gape-6.png'

export default function GapeStrip() {
  return (
    <section className="gape-strip">
      <div>
        <div className="slider">
          <div className="slide-track">
            <div className="img-container slide">
              <img src={gape1} alt="" />
            </div>
            <div className="img-container slide">
              <img src={gape2} alt="" />
            </div>
            <div className="img-container slide">
              <img src={gape4} alt="" />
            </div>
            <div className="img-container slide">
              <img src={gape3} alt="" />
            </div>
            <div className="img-container slide">
              <img src={gape6} alt="" />
            </div>
            <div className="img-container slide">
              <img src={gape5} alt="" />
            </div>

            {/* double */}

            <div className="img-container slide">
              <img src={gape1} alt="" />
            </div>
            <div className="img-container slide">
              <img src={gape2} alt="" />
            </div>
            <div className="img-container slide">
              <img src={gape4} alt="" />
            </div>
            <div className="img-container slide">
              <img src={gape3} alt="" />
            </div>
            <div className="img-container slide">
              <img src={gape6} alt="" />
            </div>
            <div className="img-container slide">
              <img src={gape5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
