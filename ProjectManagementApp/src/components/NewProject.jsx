import { useRef } from "react";
import Textinput from "./Textinput";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;

    if (!enteredDate) console.log(" the Date is not entered");
    if (!enteredTitle) console.log("The Titile is not Entered");
    if (!enteredDescription) console.log("The Descriptino is not Entered");

    onAdd({
      title: enteredTitle,
      description: enteredDate,
      dueDate: enteredDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            {" "}
            Save
          </button>
        </li>
      </menu>
      <div>
        <Textinput type="text" ref={title} label="Title" />
        <Textinput ref={description} label="Description" textarea={true} />
        <Textinput type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
