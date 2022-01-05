import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences</h3>
            <div className="exp-1">
                <h4>Data Scientist - Tereos</h4>
                <h5>Janv.2019 - Aujourd'hui</h5>
                <p>Mise en place d'un référenciel Data Science au sein du Groupe. Déployement des modèles Data Science sur Azure.
                    Accompagnement des Greens Belts, Coaching et formation Data Science.
                </p>
            </div>
            <div className="exp-2">
                <h4>Data Scientist - L'Oréal</h4>
                <h5>févr.2018 - déc.2019</h5>
                <p>Recommandation de Produits basée sur les données démographiques et Utilisation de l’algorithme
                    de NetFlix et Amazon (filtrage collaboratif) pour recommander des produits.
                    Détection de fraude
                </p>
            </div>
            <div className="exp-3">
                <h4>Projet Data Science (NLP) - Talan Solution</h4>
                <h5>sept.2017 - févr.2018</h5>
                <p>Classification automatique de CV en utilisant la Data Science
                    En tant que data scientist, et avec un peu de Talan, nous proposons une aide aux ressources humaines 
                    afin de trier automatiquement les CV réceptionnés et en ressortir les informations pertinentes.
                </p>
            </div>
        </div>
    );
};

export default Experience;