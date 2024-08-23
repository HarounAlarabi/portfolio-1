import ProjectLinks from './ProjectLinks';

function ProjectItem({ project, index, activeProject, setActiveProject }) {
  return (
    <div
      key={index}
      className={`xmd:w- group relative overflow-hidden rounded-xl shadow-lg xmd:h-36 lg:h-44 lg:w-auto ${
        activeProject === project ? 'bg-blue-500' : ''
      } left-item`}
      onClick={() => setActiveProject(project)}
    >
      <div className="relative h-full w-full">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-fill"
        />
      </div>
      <div className="xmd:hidden">
        <ProjectLinks activeProject={project} />
      </div>
    </div>
  );
}

export default ProjectItem;
