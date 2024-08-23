// // /src/components/Projects.js

import React, { useState } from 'react';
import ProjectsInfo from './ProjectsInfo';
import ProjectItem from './ProjectItem';
import ActiveProject from './ActiveProject';

import natours from '../../assets/backgrounds/natours.png';
import techerPetImg from '../../assets/backgrounds/techerPet.png';
import tvshow from '../../assets/backgrounds/tvshow.png';
import quiz from '../../assets/backgrounds/quiz.png';

const projectList = [
  {
    title: 'Teacher PET',
    description:
      'Collaboration project with a team of four to create a web application to automate the data gathering from teacher forms and develop a form accessible to pupils help who are visually impaired.',
    url: 'https://teachers-pet.netlify.app/',
    img: techerPetImg,
    type: 'fullstack',
  },
  {
    title: 'Quiz',
    description:
      'A web application that lets users take quizzes, view their results, and track their performance history. The application is built using React.',
    url: 'https://tiny-jalebi-c67751.netlify.app/',
    img: quiz,
    type: 'fullstack',
  },
  {
    title: 'Tv Shows',
    description:
      'A web application that allows users to search for tv and the user can choose any episodes of the show from the dropdown list. Every episode has a summary of the episode. The application is built using React.',
    url: 'https://main--eloquent-pothos-4f23a6.netlify.app/',
    img: tvshow,
    type: 'frontend',
  },
  {
    title: 'Natours',
    description:
      'Create a webpage for a fictional company that offers tours in nature. The website is built using HTML, CSS, and SASS.',
    url: 'https://snazzy-pasca-77a73e.netlify.app/',
    img: natours,
    type: 'frontend',
  },
];

const descriptionText =
  "Here are a few projects I've worked on recently. I'm passionate about creating and contributing to projects that are impactful and meaningful.";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectList[0]);

  return (
    <section className="mx-2 md:mx-[6rem] md:px-4" id="projects">
      <div className="container mx-auto px-4 py-8">
        <ProjectsInfo descriptionText={descriptionText} />
        <div className="grid grid-cols-1 gap-4 xmd:grid-cols-3">
          <div className="md:col-span-1">
            <div className="grid grid-cols-1 grid-rows-2 gap-4 xmd:grid-cols-2">
              {projectList.map((project, index) => (
                <ProjectItem
                  project={project}
                  key={index}
                  setActiveProject={setActiveProject}
                  activeProject={activeProject}
                />
              ))}
            </div>
          </div>
          <div className="col-span-2 hidden xmd:grid">
            {activeProject && <ActiveProject activeProject={activeProject} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
