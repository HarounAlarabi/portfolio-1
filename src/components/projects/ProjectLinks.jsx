import bincoular from '../../assets/icons/Binocular.png';
import github from '../../assets/icons/github.svg';

function ProjectLinks({ activeProject }) {
  return (
    <div className="absolute inset-0 bg-slate-900 bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="absolute bottom-0 left-0 right-0 hidden p-8 text-xs text-gray-200 sm:block">
        <h3 className="text-white text-sm font-bold">{activeProject.title}</h3>
        <p className="">{activeProject.description}</p>
      </div>
      <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] gap-20">
        <a href={activeProject.url} target="_blank" rel="noreferrer">
          <img src={bincoular} alt="bincoular" className="h-10 w-10" />
        </a>
        <a href={activeProject.github} target="_blank" rel="noreferrer">
          <img src={github} alt="github" className="h-10 w-10" />
        </a>
      </div>
    </div>
  );
}

export default ProjectLinks;
