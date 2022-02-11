import React from 'react';
import footerGapes from '../assets/footer-gapes.png';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='main-footer'>
            <div className="container">
                <nav>
                    <a href="https://twitter.com/TheGalacticApes">Twitter</a>
                    <a href="https://discord.gg/galacticapes">Discord</a>
                    <a href="https://opensea.io/collection/galacticapes">Opensea</a>
                    <Link to="/terms">Terms</Link>
                </nav>
                <img src={footerGapes} alt="Galactic Apes" />
            </div>
        </footer>
    )
}
