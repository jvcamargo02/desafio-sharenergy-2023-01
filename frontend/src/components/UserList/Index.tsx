import { Pagination } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { IRandomUser } from "../../pages/Dashboard/RandomUserApi";
import UserCard from "./UserCard";

function UserList({
    filteredList,
    limit,
    page = 1,
    setPage,
}: {
    filteredList: IRandomUser[];
    limit: number;
    page: number;
    setPage: (page: number) => void;
}) {
    return (
        <Container>
            <ListBox>
                {filteredList.map((user, i) => {
                    if (page * limit - limit <= i && i < page * limit) {
                        return <UserCard key={user.login.uuid} user={user} />;
                    }
                })}
            </ListBox>
            <Pagination
                count={+Math.ceil(filteredList.length / limit)}
                showFirstButton
                showLastButton
                page={page}
                onChange={(e: React.ChangeEvent<unknown>, number: number) => setPage(number)}
            />
        </Container>
    );
}

const Container = styled.div`
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ListBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin: 10px 0;
`;

export default UserList;
