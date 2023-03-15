import React from 'react';
import Logo from "../img/logo.svg"
import {HiOutlineHome} from "react-icons/hi";
import {AiOutlineMail} from "react-icons/ai";
import {MdShuffle} from "react-icons/md";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <img src={Logo} alt=""/>
                    <div className="header-nav">
                        <a href="#">Services</a>
                        <a href="#">Product</a>
                        <a href="#">Technology</a>
                        <select>
                            <option>About</option>
                            <option>About</option>
                            <option>About</option>
                        </select>
                        <select>
                            <option>Client</option>
                            <option>Client</option>
                            <option>Client</option>
                        </select>
                        <a href="#">Partner</a>
                    </div>
                    <div className="header-logo">
                        <a href="#">
                            <HiOutlineHome/>
                        </a>
                        <a href="#">
                            <AiOutlineMail/>
                        </a>
                        <a href="#">
                            <MdShuffle/>
                        </a>
                    </div>
                </div>
            </div>


        </header>
    );
};

export default Header;