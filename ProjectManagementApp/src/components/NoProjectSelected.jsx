import { useState } from "react";
import noProject from "../assets/no-projects.png";
import Button from "./Button.jsx";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProject} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-100 mb-4">
        Select a Project or get started with a new one{" "}
      </p>
      <p>
        <Button onClick={onStartAddProject}> Start a Project </Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
