import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Champs-sur-Marne</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0768344021">
                                <span 
                                className="clickInput" 
                                onClick={() => { alert('Téléphone copié !');}
                                }>07 68 34 40 21</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard>
                                <span
                                className="clickInput"
                                onClick={() => { alert("E-mail copié!");}
                                }>harcherole@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <di className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/georfmiguiamabamba/" target="_blank"
                        rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/harcherole/" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://codepen.io/harcherole" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Codepen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                        <a href="https://www.youtube.com/@DIAM-IA" target="_blank"
                        rel="noopener noreferrer">
                            <h4>YouTube</h4>
                            <i className="fab fa-youtube"></i>
                        </a>
                    </ul>
                </di>
            </div>
        </div>
    );
};

export default Contact;