import React from 'react';
import img from "../img/pana.png"

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero-nav">
                           <h1>Making the most of the ever-growing <br/>
                            <span>Information Technology</span></h1>
                        <p>Managed by a team of professional experts with extensive <br/>
                            experience and impressive track records</p>
                        <button>Read More</button>
                    </div>
                    <div className="hero-img">
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;