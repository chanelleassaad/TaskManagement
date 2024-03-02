import { FormControlLabel } from "@mui/material"

function Checkbox() {
  return (
    <div>
        <FormControlLabel required control={<Checkbox />} label="Required" />
    </div>
  )
}

export default Checkbox