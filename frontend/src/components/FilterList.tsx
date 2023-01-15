import Divider from "@mui/material/Divider";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { IRandomUser } from "../pages/Dashboard/RandomUserApi";
import SearchInput from "./SearchInput";
import PaperMui from "./PaperMui";

export default function FilterList({
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

    function setListAndPage(searchTerm: string, limitNum = limit, userList = list) {
        setList(isSearched(searchTerm, limit)(list) ?? list);
    }

    return (
        <PaperMui>
            <SearchInput search={search} setSearch={setListAndPage} />
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
        </PaperMui>
    );
}
