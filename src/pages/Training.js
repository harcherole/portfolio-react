import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Training = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                
                <di className="socialNetwork">
                    <ul>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_H78c-6GMcSNWkjyXsBoqQxgjry4_V8VztcRcoICitjBhkQ/viewform?usp=header" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Formation PowerBI
                            </h4>
                            <i className="fas fa-award"></i>
                        </a>
                        <a href="https://www.billetweb.fr/mentorat4" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Séance de mentorat en DS & IA</h4>
                            <i className="fas fa-chalkboard-teacher"></i>
                        </a>
                        <a href="https://whatsapp.com/channel/0029Vb6RGQyHVvThWNafAK09" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Booster votre CV</h4>
                            <i className="fas fa-laptop-code"></i>
                        </a>
                        <a href="https://whatsapp.com/channel/0029Vb6RGQyHVvThWNafAK09" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Formation en IA</h4>
                            <i className="fab fa-youtube"></i>
                        </a>
                    </ul>
                </di>
            </div>
        </div>
    );
};

export default Training;