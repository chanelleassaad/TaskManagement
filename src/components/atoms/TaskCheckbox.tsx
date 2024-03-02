import { Checkbox, CheckboxProps } from "@mui/material";

function TaskCheckbox({ ...props }: CheckboxProps) {
  return (
    <>
      <Checkbox {...props} />
    </>
  );
}

export default TaskCheckbox;
