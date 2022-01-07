import project1 from '../media/project1.JPG';
import project2 from '../media/project2.JPG';
import project3 from '../media/project3.JPG';
import project4 from '../media/project4.JPG';
import project5 from '../media/project5.JPG';
import project6 from '../media/project6.JPG';
import project7 from '../media/project7.JPG';
import project8 from '../media/project8.JPG';

export const portfolioData = [
  {
    id: 1,
    name: 'R Shiny Dashboard',
    languages: ['r'],
    languagesIcons: ['fab fa-r-project'],
    source: 'https://github.com/harcherole?tab=repositories',
    info: 'Je passe en revue comment fonctionnaliser les tableaux de bord #RShiny à l\'aide des modules. Je crée un tableau de bord simple à l\'aide de l\'ensemble de données Palmer Penguins, puis je modularise les composants du tableau de bord. J\'explique certains avantages de la modularisation et explique les bases des modules Shiny.',
    picture: project1
  },
  {
    id: 2,
    name: 'Système de reco',
    languages: ['python'],
    languagesIcons: ['fab fa-python','fab fa-microsoft','fab fa-amazon', 'fab fa-docker'],
    source: 'https://github.com/harcherole?tab=repositories',
    info: 'Construiction d\'un système de recommandation qui recommande des films en fonction des films vu précédemment',
    picture: project2
  },
  {
    id: 3,
    name: 'dolorset.fr',
    languages: ['javascript','php','css'],
    languagesIcons: ['fab fa-js','fab fa-php','fab fa-css3-alt', 'fab fa-github'],
    source: 'https://github.com/harcherole?tab=repositories',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
    picture: project3
  },
  {
    id: 4,
    name: 'laboriosam.fr',
    languages: ['javascript','php','react'],
    languagesIcons: ['fab fa-js','fab fa-php','fab fa-react'],
    source: 'https://github.com/harcherole?tab=repositories',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
    picture: project4
  },
  {
    id: 5,
    name: 'repudiante.com',
    languages: ['javascript','css'],
    languagesIcons: ['fab fa-js', 'fab fa-css3-alt'],
    source: 'https://github.com/harcherole?tab=repositories',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
    picture: project5
  },
  {
    id: 6,
    name: 'test.io',
    languages: ['javascript','react', 'css'],
    languagesIcons: ['fab fa-js','fab fa-react','fab fa-css3-alt'],
    source: 'https://github.com/harcherole?tab=repositories',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.',
    picture: project6
  },
  {
    id: 7,
    name: 'R Shiny Interactive Viz',
    languages: ['r'],
    languagesIcons: ['fab fa-r-project','fas fa-file-csv'],
    source: 'https://github.com/harcherole?tab=repositories',
    info: 'Il s\'agit d\'un didacticiel sur la visualisation interactive à l\'aide de la bibliothèque Shiny dans R. Il s\'agit d`\'une application brillante très basique à des fins d\'introduction.Une connaissance de base de R est recommandée pour ce tutoriel.',
    picture: project7
  },
  {
    id: 8,
    name: 'Gradient Descente',
    languages: ['python'],
    languagesIcons: ['fab fa-r-project','fas fa-file-csv'],
    source: 'https://github.com/harcherole?tab=repositories',
    info: 'Il s\'agit de simuler la descente de gradient en utilisant un module 3D Python',
    picture: project8
  },
]