import React from 'react';
import '../root.css';
import './header.css';
import Logo from '../SVG/monetus.logo.symbol.png'
import Btn from '../SVG/icon-home.svg';

class Home1 extends React.Component{
    render(){
        return(
            <div className="home" id="home">
                <div className="home-logo" id="logo">
                    <img src={Logo} alt="" className="monetus-logo" />
                </div>
                <div className="button-home">
                    <div className="border-left"></div>
                    <a href="#home"><img src={Btn} alt="" className="btn" /></a>
                    <div className="border-rigth"></div>
                </div>
            </div>
        )
    }
}

export default Home1;