import { useState } from "react";
import { TextField } from "@mui/material";
import CreateButton from "../atoms/CreateButton";

interface TaskInputProps {
  onCreate: (taskName: string) => void;
}

function TaskInput({ onCreate }: TaskInputProps) {
  const [taskName, setTaskName] = useState("");

  const handleCreate = () => {
    // trim incase the user only inputs spaces
    if (taskName.trim() !== "") {
      onCreate(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="flex justify-between">
      <TextField
        style={{ width: "90%", marginRight: "5%" }}
        label="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <CreateButton
        onClick={handleCreate}
        disabled={taskName.trim() === ""}
      ></CreateButton>
    </div>
  );
}

export default TaskInput;
