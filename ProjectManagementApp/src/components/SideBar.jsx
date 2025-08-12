import Button from "./Button.jsx";

const SideBar = ({
  onStartAddProject,
  projects,
  onSelect,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-80 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h1>
      <ul>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800";

          if (selectedProjectId === project.id) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelect(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
    </aside>
  );
};

export default SideBar;
