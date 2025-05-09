import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages : [
            {id: 1, value: "Python", xp: 2.7},
            {id: 2, value: "R", xp: 2.7},
            {id: 3, value: "SQL & NoSQL", xp: 2.7}
        ],
        frameworks : [
            {id: 1, value: "Scikit-learn", xp: 2.7},
            {id: 2, value: "Tensorflow & Keras", xp: 2.8},
            {id: 3, value: "Pandas & Numpy", xp: 2.7},
            {id: 4, value: "NLTK & NLP", xp: 2.5},
            {id: 5, value: "Matplotlib & Seaborn", xp: 2.5}
        ]
    }


    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks} 
                    title="Frameworks & Bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;