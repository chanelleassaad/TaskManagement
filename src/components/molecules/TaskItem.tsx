// molecules/TaskItem.tsx
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskCheckbox from "../atoms/TaskCheckbox";

interface TaskItemProps {
  taskName: string;
  completed: boolean;
  onDelete: () => void;
  onToggleStatus: () => void;
}

function TaskItem({
  taskName,
  completed,
  onDelete,
  onToggleStatus,
}: TaskItemProps) {
  return (
    <ListItem>
      <TaskCheckbox checked={completed} onChange={onToggleStatus} />
      <ListItemText primary={taskName} />
      <ListItemSecondaryAction>
        <IconButton onClick={onDelete} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TaskItem;
