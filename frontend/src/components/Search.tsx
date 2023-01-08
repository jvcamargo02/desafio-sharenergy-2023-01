import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { BiSearchAlt } from "react-icons/bi";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { IRandomUser } from "../pages/Dashboard/RandomUserApi";

export default function Search({
    limit,
    setLimit,
    search,
    setSearch,
    list,
    setList,
    setPage,
}: {
    limit: number;
    setLimit: (limit: number) => void;
    search: string;
    setSearch: (search: string) => void;
    list: IRandomUser[];
    setList: (list: IRandomUser[]) => void;
    setPage: (page: number) => void;
}) {
    function isSearched(searchTerm: string, limit: number) {
        return function (userList: IRandomUser[]) {
            setSearch(searchTerm);
            setLimit(limit);
            const filteredList = [];

            for (let i = 0; i < userList.length; i++) {
                const user = userList[i];

                if (
                    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.login.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    filteredList.push(user);
                }
            }
            return filteredList;
        };
    }

    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                maxwidth: 400,
                width: "60%",
                margin: "0 auto",
            }}
            variant="outlined"
        >
            <TextField
                variant="standard"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search User"
                inputProps={{ "aria-label": "search user" }}
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setList(isSearched(e.target.value, limit)(list) ?? list)
                }
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <BiSearchAlt onClick={() => setList(isSearched(search, limit)(list) ?? list)} />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <FormControl sx={{ width: 125 }} variant="outlined">
                <InputLabel id="demo-simple-select-label">Limite</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={limit}
                    label="Limite"
                    onChange={(e: SelectChangeEvent<number>): any => {
                        setList(isSearched(search, +e.target.value)(list) ?? list);
                        setPage(1);
                    }}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={75}>75</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
            </FormControl>
        </Paper>
    );
}
