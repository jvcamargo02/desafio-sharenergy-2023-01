import { useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import NavigationBar from "../../components/Dashboard/NavigationBar";

import DashboardLayout from "../../components/Dashboard/DashboardLayout";

export default function Dashboard() {
    return (
        <DashboardLayout background={"linear-gradient(270deg, rgba(223,229,101,1) 0%, rgba(27,162,161,1) 65%)"}>
            <NavigationBar />

            <Container>
                <Outlet />
            </Container>
        </DashboardLayout>
    );
}

const Container = styled.div`
    padding: 30px;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    @media (max-width: 600px) {
        height: calc(100vh - 80px);
        padding: 20px;
    }
`;
