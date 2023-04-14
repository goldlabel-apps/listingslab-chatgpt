import * as React from "react"
import {
  Box,
  TextField,
} from "@mui/material"

export default function InputMultiline() {
  return (
    <Box
        noValidate
        autoComplete="off"
        component="form"
        sx={{
            "& .MuiTextField-root": { mr: 1 },
        }}>
        <TextField
            fullWidth
            id="prompt"
            variant="filled"
            defaultValue="hello,"
            label="Prompt"
            multiline
            rows={10}
        />
    </Box>
  )
}
