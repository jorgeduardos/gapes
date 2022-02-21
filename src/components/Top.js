import {React, useEffect} from 'react'
import arrow from '../assets/icons/pointer-white.png'

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Top() {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);


    function toTop(){
        gsap.to(window, {
            duration: 0.5,
            scrollTo: {y: 0},
            ease: 'none'
        })
    }

    useEffect(()=>{
        ScrollTrigger.create({
            trigger: 'body',
            toggleClass: { targets: '.toTop', className: 'active'},
            toggleActions: "play reverse none none",
            start: '+=700 top',
            // markers: true
        })
    }, [])

    return (
        <div className='toTop' onClick={toTop}>
            <img src={arrow} alt="" />
            <span>To Top</span>
        </div>
    )
}
