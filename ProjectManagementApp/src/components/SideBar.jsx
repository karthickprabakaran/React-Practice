import Button from "../components/Button.jsx";

const SideBar = ({ onStartAddProject, projects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-80rem rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h1>
      {projects.map((project) => {
        return (
          <li className="list-none" key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        );
      })}

      <div>
        <Button onClick={onStartAddProject}>Add Project +</Button>
      </div>
    </aside>
  );
};

export default SideBar;
