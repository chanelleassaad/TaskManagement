import { Container, Tab, Tabs } from "@mui/material";
import TaskList from "../organisms/TaskList";
import TaskInput from "../molecules/TaskInput";
import React from "react";
import Spinner from "../atoms/Spinner";

function loadPage(setIsLoading: {
  (value: React.SetStateAction<boolean>): void;
  (arg0: boolean): void;
}) {
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
}

function MainTemplate() {
  const initialTasks = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
    { id: 3, name: "Task 3", completed: true },
    { id: 4, name: "Task 4", completed: true },
  ];
  const [taskState, setValue] = React.useState("active");
  const [tasks, setTasks] = React.useState(initialTasks);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    loadPage(setIsLoading);
  }, []);

  const activeTasks = tasks.filter((t) => t.completed == false);
  const completedTasks = tasks.filter((t) => t.completed == true);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setIsLoading(true);
    loadPage(setIsLoading);
  };

  const createTask = (taskName: string) => {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((t) => t.id != taskId));
  };

  const toggleTaskStatus = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      return task.id == taskId ? { ...task, completed: !task.completed } : task;
    });
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Tabs
        value={taskState}
        onChange={handleChange}
        variant="fullWidth"
        className="pb-5"
      >
        <Tab value="active" label="Active Tasks" />
        <Tab value="completed" label="Completed Tasks" />
      </Tabs>

      {isLoading ? <Spinner /> : null}

      {taskState === "active" && !isLoading && (
        <>
          <TaskInput onCreate={createTask} />
          {activeTasks.length == 0 ? (
            <p className="flex justify-center mt-40">No Active Tasks</p>
          ) : (
            <TaskList
              tasks={activeTasks}
              onDelete={deleteTask}
              onToggleStatus={toggleTaskStatus}
            />
          )}
        </>
      )}

      {taskState === "completed" && !isLoading && (
        <>
          {completedTasks.length == 0 ? (
            <p className="flex justify-center mt-40">No Completed Tasks</p>
          ) : (
            <TaskList
              tasks={completedTasks}
              onDelete={deleteTask}
              onToggleStatus={toggleTaskStatus}
            />
          )}
        </>
      )}
    </Container>
  );
}

export default MainTemplate;
