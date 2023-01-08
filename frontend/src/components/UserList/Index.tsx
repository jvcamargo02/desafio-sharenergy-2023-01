import React from "react";
import styled from "styled-components";
import { IRandomUser } from "../../pages/Dashboard/RandomUserApi";
import Links from "../Link";

function UserList({ filteredList }: { filteredList: IRandomUser[] }) {
    return (
        <Container>
            {filteredList.map((user) => (
                <CardContainer key={user.login.uuid}>
                    <img src={user.picture.large} alt={user.name.first} />
                    <h1>{user.name.first}</h1>
                    <h2>{user.name.last}</h2>
                    <h3>{user.login.username}</h3>
                    <Links href={`mailto:${user.email}`}>{user.email}</Links>
                    <h4>Idade: {user.dob.age} anos</h4>
                </CardContainer>
            ))}
        </Container>
    );
}

const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin: 10px 0;
`;

const CardContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 260px;
    margin: 10px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid rgba(27, 162, 161, 0.2);
    list-style: none;
    & > *:not(:last-child) {
        margin-bottom: 4px;
    }
    & > *:first-child {
        border-radius: 10px 10px 0 0;
    }
    h1,
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: rgba(223, 229, 101, 1);
    }
    h2 {
        color: rgba(27, 162, 161, 1);
    }
    h3,
    h4 {
        font-size: 1rem;
        font-weight: 500;
        color: rgba(27, 162, 161, 1);
    }

    &:hover {
        background-color: rgba(27, 162, 161, 0.1);
        box-shadow: none;
    }
`;

export default UserList;
