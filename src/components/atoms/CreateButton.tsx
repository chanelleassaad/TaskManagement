import Button, { ButtonProps } from "@mui/material/Button";

function CreateButton({ ...props }: ButtonProps) {
  return (
    <>
      <Button variant="outlined" {...props}>
        Create
      </Button>
    </>
  );
}

export default CreateButton;
