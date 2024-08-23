// import Icon from '../Icon';
// import TechText from './TechText';
// import VideoBg from './VideoBg';

// function Technologies() {
//   const techs = [
//     'html5',
//     'css3',
//     'javascript',
//     'react',
//     'node-dot-js',
//     'sass',
//     'docker',
//     'git',
//     'amazonaws',
//     'postgresql',
//     'terraform',
//   ];

//   return (
//     <div className="flex flex-wrap justify-center gap-10">
//       <VideoBg />
//       <TechText />
//       <div className="grid grid-cols-6 items-center justify-center gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
//         {techs.map((tech, index) => (
//           <figure
//             className="animate-float-and-rotate relative m-8 rounded-full p-20 sm:mb-4 sm:p-12"
//             key={index}
//           >
//             <Icon
//               icon={tech}
//               className="text-aliceblue absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full fill-current fill-slate-50 sm:h-24 sm:w-24"
//             />
//           </figure>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Technologies;
import React from 'react';
import TechText from './TechText';
import VideoBg from './VideoBg';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import tailwind from '../../assets/icons/tailwind-css.svg';
import javascript from '../../assets/icons/javascript.svg';
import reactJS from '../../assets/icons/react.svg';
import node from '../../assets/icons/nodejs.svg';
import aws from '../../assets/icons/amazon-aws.svg';
import docker from '../../assets/icons/docker.svg';
import postgresql from '../../assets/icons/postgresql.svg';

const logos = [
  aws,
  html,
  css,
  javascript,
  reactJS,
  node,
  tailwind,
  docker,
  postgresql,
];

const Technologies = () => {
  return (
    <section className="w-full md:mx-auto">
      <VideoBg />

      <TechText />
      <div className="mx-auto my-10 w-full">
        <div
          className="group relative mx-20 mt-6 flex justify-center gap-6 overflow-hidden p-2 xs:px-14 sm:mx-20 sm:p-8"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo}
                    className="h-10 w-28 px-2 brightness-0 dark:invert"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
