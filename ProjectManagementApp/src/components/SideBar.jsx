import Button from "../components/Button.jsx";

const SideBar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-80rem rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h1>

      <div>
        <Button>Add Project +</Button>
      </div>
    </aside>
  );
};

export default SideBar;
