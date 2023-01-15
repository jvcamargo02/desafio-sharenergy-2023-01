import { IconButton, TextField } from "@mui/material";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

function SearchInput({ search, setSearch, placeholder = "Buscar usuário" }: {
    search: string;
    setSearch: (search: string) => void;
    placeholder?: string;
  }) {
    return (
        <>
            <TextField
                variant="standard"
                sx={{ ml: 1, flex: 1 }}
                placeholder={placeholder}
                inputProps={{ "aria-label": "search user" }}
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                type="number"
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <BiSearchAlt onClick={() => setSearch(search)} />
            </IconButton>
        </>
    );
}

export default SearchInput;
