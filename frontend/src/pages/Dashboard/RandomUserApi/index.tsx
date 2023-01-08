import axios from "axios";
import React, { ChangeEvent } from "react";
import Loading from "../../../components/Loading";
import Search from "../../../components/Search";
import Title from "../../../components/Title";
import UserList from "../../../components/UserList/Index";

export interface IRandomUser {
    name: { title: string; first: string; last: string };
    email: string;
    picture: { large: string; medium: string; thumbnail: string };
    login: { uuid: string; username: string };
    dob: { date: string; age: number };
}

function RandomUser() {
    const [randomUser, setRandomUser] = React.useState<IRandomUser[]>([]);
    const [filteredList, setFilteredList] = React.useState<IRandomUser[]>([]);
    const [limit, setLimit] = React.useState(100);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        axios
            .get(`https://randomuser.me/api/?results=100&seed=shareenergy&inc=picture,name,email,login,dob`)
            .then((response) => {
                setRandomUser(response.data.results);

                if(search === "") setFilteredList(response.data.results);
            });
    }, []);

    if (randomUser.length === 0) return <Loading />;

    return (
        <>
            <Title>
                <h1>Random</h1>
                <h1>User</h1>
            </Title>
            <Search limit={limit} setLimit={setLimit} search={search} setSearch={setSearch} list={randomUser} setList={setFilteredList}/>
            <UserList filteredList={filteredList} />
        </> 
    );
}

export default RandomUser;
