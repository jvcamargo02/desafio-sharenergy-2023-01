import { Paper } from "@mui/material";
import axios from "axios";
import React, { ComponentElement, useEffect } from "react";
import styled from "styled-components";
import { JsxElement } from "typescript";
import SearchInput from "../../../components/SearchInput";
import Title from "../../../components/Title";

function HttpCatsApi() {
    const [search, setSearch] = React.useState("");
    const [paperBackground, setPaperBackground] = React.useState("#fff");

    useEffect(() => {
        if (search.match(/^[0-9]{3}$/g) === null && search.length > 3) return setPaperBackground("#fdd1d1");

        setPaperBackground("#fff");
    }, [search]);

    return (
        <>
            <Title>
                <h1>HTTP</h1>
                <h1>Cats</h1>
            </Title>
            <Paper
                component="form"
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    maxwidth: 400,
                    width: "60%",
                    margin: "0 auto",
                    backgroundColor: `${paperBackground}`,
                }}
                variant="outlined"
            >
                <SearchInput search={search} setSearch={setSearch} placeholder="Buscar erro" />
            </Paper>
            <ResultBox>
                {search.match(/^[0-9]{3}$/g) === null && search.length > 3 ? (
                    <StyledTitle>
                        <Title>
                            {" "}
                            <h1>OPS❗️</h1>
                            <h1>Tente buscar por um número de 100 à 500. </h1>
                        </Title>
                    </StyledTitle>
                ) : search.length < 3 ? (
                    <StyledTitle>
                        <Title>
                            {" "}
                            <h1>Vamos buscar</h1>
                            <h1>por erros?</h1>
                        </Title>
                    </StyledTitle>
                ) : (
                    <img src={`https://http.cat/${search}`} alt="Cat" />
                )}
            </ResultBox>
        </>
    );
}

export default HttpCatsApi;

const ResultBox = styled.div`
    margin: 25px auto;
    height: 65%;
    background-color: rgba(27, 162, 161, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    img {
        max-height: 100%;
    }
`;

const StyledTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90%;

    * {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }
`;
