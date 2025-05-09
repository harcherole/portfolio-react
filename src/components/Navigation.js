import React from 'react';
import { NavLink } from 'react-router-dom';
import Georf from '../media/Georf.PNG';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src={Georf} alt="profil-pic"/>
                    <h3>MIGUIAMA BAMBA Georf</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/georfmiguiamabamba/" target="_blank" 
                        rel="noopener noreferrer" ><i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/harcherole/" target="_blank" 
                        rel="noopener noreferrer" ><i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/harcherole" target="_blank" 
                        rel="noopener noreferrer" ><i className="fab fa-codepen"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@DIAM-IA" target="_blank" 
                        rel="noopener noreferrer" ><i className="fab fa-youtube"></i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>GeorfMIGUIAMA - 2022</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;