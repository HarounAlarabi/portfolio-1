import ProjectLinks from './ProjectLinks';

function ActiveProject({ activeProject }) {
  return (
    <div className="active-item group relative overflow-hidden rounded-2xl shadow-lg xmd:h-[19rem] lg:h-[23rem]">
      <img
        src={activeProject.img}
        alt={activeProject.title}
        className="h-full w-full object-fill"
      />
      <ProjectLinks activeProject={activeProject} />
    </div>
  );
}

export default ActiveProject;
