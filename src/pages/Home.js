import React from 'react';
import Navigation from '../components/Navigation';
import CV from '../media/CV.pdf';
import Presse from '../media/fiche_de_presse_Georf_MIGUIAMA_BAMBA.pdf';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>MIGUIAMA BAMBA Georf</h1>
                    <h2>Lead Data Scientist</h2>
                    <div className="pdf">
                        <a href={CV} target="_blank">Télécharger mon CV</a>
                        <a href={Presse} target="_blank">Voir mon dossier de presse</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;