import React from 'react';
import img from "../img/comp.png"



const Comp = () => {
    return (
        <div id="comp">
            <div className="container">
                <div className="comp">
                    <div className="comp-title">
                        <img src={img} alt=""/>
                    </div>
                    <div className="comp-p">
                        <h1>Welcome to <span>Dwidasa Samsara <br/>
                            Indonesia (DSI)</span></h1>
                        <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based application concept.
                            <br/>
                            <br/>
                            <br/>
                            Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Comp;