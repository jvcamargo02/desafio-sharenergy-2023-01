import TextField from "@mui/material/TextField";
import styled from "styled-components";
import InputMask from "react-input-mask";
import React from "react";

export default function Input({
    label = "",
    defaultValue = "",
    value = "",
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {},
}) {
    return (
            <TextField variant="outlined" label={label} required defaultValue={defaultValue} value={value} onChange={onChange}/>
    );
}

