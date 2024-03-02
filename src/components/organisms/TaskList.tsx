import { List } from "@mui/material";
import TaskItem from "../molecules/TaskItem";

interface Task {
  id: number;
  name: string;
  completed?: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (taskId: number) => void;
  onToggleStatus: (taskId: number) => void;
}

function TaskList({ tasks, onDelete, onToggleStatus }: TaskListProps) {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          taskName={task.name}
          completed={task.completed || false}
          onDelete={() => onDelete(task.id)}
          onToggleStatus={() => onToggleStatus(task.id)}
        />
      ))}
    </List>
  );
}

export default TaskList;
