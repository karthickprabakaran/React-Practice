import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
