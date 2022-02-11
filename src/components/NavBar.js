import {React} from 'react';
import twitterLogo from '../assets/icons/twitter.svg'
import discordLogo from '../assets/icons/discord.svg'
import osLogo from '../assets/icons/opensea.svg'
import { Link, useLocation } from "react-router-dom";

import gapesLogo from '../assets/main-gapes-logo.png';
import monkesLogo from '../assets/logo-gapes-blue.png';

export default function NavBar() {

    const path = useLocation().pathname;
    const location = path.split("/")[1];


    return (
        <div className="inner nav-wrapper">
            <Link to="/"><img className='logo' src={location === 'monke' ? monkesLogo : gapesLogo} alt="Galactic Apes" /></Link>
            <nav className='main-nav'>
                <a href="https://twitter.com/TheGalacticApes" target="_blank" rel="noreferrer">
                    <img src={twitterLogo} alt="Twitter" />
                </a>
                <a href="https://discord.gg/galacticapes" target="_blank" rel="noreferrer">
                    <img src={discordLogo} alt="Discord" />
                </a>
                <a href="https://opensea.io/collection/galacticapes" target="_blank" rel="noreferrer">
                    <img src={osLogo} alt="Open Sea" />
                </a>
                <Link to="/monke">Monke</Link>
            </nav>
        </div>
    )
}
