import React from "react";
import styled from "styled-components";

export default function Logo() {
    return (
        <Container>
            <h1>JOÃO</h1>
            <h1>CAMARGO</h1>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    font-weight: 700;

    h1 {
        font-size: 2rem;

        &:first-child {
          color: rgba(223, 229, 101, 1);
        }

        &:last-child {
          color: rgba(27, 162, 161, 0.6);
          margin-left: calc(2rem * -0.75);
          margin-top: 1.5px;
        }
    }

    `
