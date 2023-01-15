import React from "react";
import styled from "styled-components";
import { IRandomUser } from "../../pages/Dashboard/RandomUserApi";
import Links from "../Link";

function UserCard({ user }: { user: IRandomUser }) {
    return (
        <Container>
            <img src={user.picture.large} alt={user.name.first} />
            <h1>{user.name.first}</h1>
            <h2>{user.name.last}</h2>
            <h3>@<span>{user.login.username}</span></h3>
            <Email href={`mailto:${user.email}`}>{user.email}</Email>
            <h4>Idade: {user.dob.age} anos</h4>
        </Container>
    );
}

export default UserCard;

const Container = styled.li`
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

        & > span {
            font-size: 0.8rem;
            }
    }

    &:hover {
        background-color: rgba(27, 162, 161, 0.1);
        box-shadow: none;
    }
`;


const Email = styled(Links)`
    color: rgba(27, 162, 161, 1) !important;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    `;