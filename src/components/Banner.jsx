import React, {useState} from 'react';
import '../styles/Banner.css';

import Menu from './Menu.jsx';
import spaceship from '../assets/spaceship.png';
import ComingSoon from "./ComingSoon.jsx";

function Banner() {
    const [isExploding, setIsExploding] = useState(false);
    const [isExploded, setIsExploded] = useState(false);

    const handleClick = () => {
        if (!isExploding && !isExploded) {
            setIsExploding(true);
            setTimeout(() => {
                setIsExploded(true);
            }, 50);
        }
    };
    let spaceshipClass = 'spaceship-icon';
    if (isExploding) {
        spaceshipClass += ' exploding';
    }
    if (isExploded) {
        spaceshipClass += ' exploded';
    }
    return (
        <div className="banner-area">
            {/* SPACESHIP */}
            <div id="spaceship-tracker">
                <img
                    src={spaceship}
                    alt="Animated Spaceship"
                    className={spaceshipClass}
                    onClick={handleClick}
                />
            </div>
            <div className="banner-cover">
                <Menu/>
                <div className="title-section-wrapper">
                    <h1>Hello, I'm Emily</h1>
                    <p>A professional software developer</p>
                    <div className="button-bar">
                        <ComingSoon/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;