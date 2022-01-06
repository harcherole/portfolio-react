import React from 'react';
import Navigation from '../components/Navigation';
import CV from '../media/CV.pdf';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>MIGUIAMA BAMBA Georf</h1>
                    <h2>Data Scientist</h2>
                    <div className="pdf">
                        <a href={CV} target="_blank">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;