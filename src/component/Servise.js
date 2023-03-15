import React from 'react';
import img from "../img/product.svg"
import img1 from "../img/verified.svg"
import img2 from "../img/cogwheel 1.svg"
const Servise = () => {
    return (
        <div id="servise">
            <div className="container">
                <h1>Product and Service</h1>
                <div className="servise">
                    <div className="product">
                        <img src={img} alt=""/>
                        <h2>Our Product</h2>
                        <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                        <button>Read More</button>
                    </div>
                    <div className="product2">
                        <img src={img1} alt=""/>
                        <h2>Our Product</h2>
                        <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                        <button>Read More</button>
                    </div>
                    <div className="product3">
                        <img src={img2} alt=""/>
                        <h2>Our Product</h2>
                        <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Servise;