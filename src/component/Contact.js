import React from 'react';
import con from "../img/logo.svg"


const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="contact">
                    <div className="con">
                        <img src={con} alt=""/>
                        <h2>PT Dwidasa Samsara Indonesia</h2>
                        <p>Ruko Jalur Sutera 29A No. 53 <br/>
                            Alam Sutera Serpong, Tangerang 15323
                        </p>
                    </div>
                    <div className="cons">
                        <h1>Contact</h1>
                        <p>Phone : +62.21.5314.1135 <br/>
                            Fax : +62.21.5314.1135 <br/>
                            Email : community@dwidasa.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;