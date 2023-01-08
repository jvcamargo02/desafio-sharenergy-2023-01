import React from "react";
import styled from "styled-components";

export default function Title({ children }: { children: React.ReactNode}) {
    return (
        <Container>
            {children}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    font-weight: 700;
    width: 100%;
    margin-top: 25px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 2rem;

        &:first-child {
            color: rgba(223, 229, 101, 1);
        }

        &:last-child {
            color: rgba(27, 162, 161, 0.6);
        }
    }
`;
