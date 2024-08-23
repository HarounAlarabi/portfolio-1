import React from 'react';
import backend from '../images/backend.png';
import frontend from '../images/frontend.png';
import ux from '../images/ux.png';
import aws from '../images/amazon-aws.svg';

const imageAltText = 'purple and blue abstract background';

const description =
  'I am a Full Stack Developer with a background in UI/UX design. I have a passion for creating and designing new and innovative solutions. I am always looking for new ways to make technology accessible to all. I am a creative problem solver and a team player who is always looking for new ways to drive innovation.';

const skillsList = [
  'Front-end developer',
  'Back-end developer',
  'UI/UX designer',
  'AWS',
];

const skillsImages = [frontend, backend, ux, aws];

const About = () => {
  return (
    <section
      className="relative h-full bg-slate-200 p-10 px-4 md:p-14 lg:p-20"
      id="about"
    >
      <div className="col-span-5 mx-10 mb-8 md:mx-20 lg:ml-20">
        <h2 className="mb-4 font-beckman text-4xl font-extrabold text-gray-900">
          About Myself
        </h2>
        <p className="text-black text-lg">{description}</p>
      </div>
      <div className="ml-20 mt-20 flex flex-wrap gap-5">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="flex h-64 w-64 flex-col items-center justify-center rounded-xl border border-secondary bg-stone-800 p-8 text-center text-2xl font-extrabold text-platinum transition-all duration-300"
          >
            <img
              src={skillsImages[index]}
              alt={imageAltText}
              className="mb-4 h-20 w-20 fill-slate-300"
            />
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
