import React from "react";
import { Link } from "react-router-dom";

import tenor from '../../assets/images/tenor.png'; 
import giphy from '../../assets/images/giphy.png'; 

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="center">
                    <Link to="/">Accueil</Link>
                    <div className="vt-separator"></div>
                    <Link to="/tenor">Explorer</Link>
                    <Link to="/tenor"><img className="logo" src={tenor} alt="Logo" /></Link>
                    <div className="vt-separator"></div>
                    <Link to="/giphy">Explorer</Link>
                    <Link to="/giphy"><img className="logo" src={giphy} alt="Logo" /></Link>
                </div>
            </header>
        )
    }
}

export default Header;