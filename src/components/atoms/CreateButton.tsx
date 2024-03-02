import Button, { ButtonProps } from "@mui/material/Button";

// so all props of a normal Button can be used with CreateButton
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
