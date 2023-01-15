import TextField from "@mui/material/TextField";
import React from "react";

export default function Input({
    label = "",
    defaultValue = "",
    value = "",
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {},
}) {
    return (
        <TextField
            variant="outlined"
            label={label}
            required
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            fullWidth
        />
    );
}
