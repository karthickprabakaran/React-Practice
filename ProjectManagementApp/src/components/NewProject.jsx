import { useRef } from "react";
import Textinput from "./Textinput";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd, onCancel }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;

    if (
      enteredTitle.trim() == "" ||
      enteredDescription.trim() == "" ||
      enteredDate.trim() == ""
    ) {
      //show the error model
      <Modal>
        <h1>there is an error in the given date or description or the title</h1>
      </Modal>;
    } else {
      //push the details
      onAdd({
        title: enteredTitle,
        description: enteredDate,
        dueDate: enteredDate,
      });
    }
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancel}
            className="text-stone-800 hover:text-stone-950"
          >
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
