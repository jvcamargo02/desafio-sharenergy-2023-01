import React, { useEffect } from "react";
import styled from "styled-components";

import PaperMui from "../../../components/PaperMui";
import ResultBox from "../../../components/ResultBox";
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
            <PaperMui paperBackground={paperBackground}>
                <SearchInput search={search} setSearch={setSearch} placeholder="Buscar erro" type="number"/>
            </PaperMui>
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
