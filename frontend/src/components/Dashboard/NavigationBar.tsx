import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { HiUserGroup } from "react-icons/hi";

import { FaCat, FaDog } from "react-icons/fa";

import { CgUserList } from "react-icons/cg";

import NavigationButton from "./NavigationButton";

export default function NavigationBar() {
    const location = useLocation();

    function isActive(buttonPath: string) {
        return location.pathname === buttonPath;
    }

    return (
        <Container>
            <Link to="/dashboard/random-user">
                <NavigationButton active={isActive("/dashboard/random-user")}>
                    <HiUserGroup />
                    <span>Random Users API</span>
                </NavigationButton>
            </Link>

            <Link to="/dashboard/http-cats">
                <NavigationButton active={isActive("/dashboard/http-cats")}>
                    <FaCat />
                    <span>HTTP Cats Errors</span>
                </NavigationButton>
            </Link>

            <Link to="/dashboard/random-dog">
                <NavigationButton active={isActive("/dashboard/random-dog")}>
                    <FaDog />
                    <span>Random Dog API</span>
                </NavigationButton>
            </Link>

            <Link to="/dashboard/random-dog">
                <NavigationButton active={isActive("/dashboard/random-dog")}>
                    <CgUserList />
                    <span>Lista De Clientes</span>
                </NavigationButton>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ddd;
    box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.1);
    width: 100px;
    min-height: 500px;
    flex-shrink: 0;
    > a {
        text-decoration: none;
    }
    @media (max-width: 600px) {
        width: 100%;
        height: 80px;
        min-height: 0px;
        flex-direction: row;
    }
`;
