import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import styled from "styled-components";
import { FiRefreshCcw } from "react-icons/fi";

import PaperMui from "../../../components/PaperMui";
import Title from "../../../components/Title";
import ResultBox from "../../../components/ResultBox";
import Loading from "../../../components/Loading";

function RandomDog() {
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [url, setUrl] = React.useState<string>("");
    const [content, setContent] = React.useState(
        <StyledTitle>
            <Title>
                <h1>Vamos buscar</h1>
                <h1>por um dog?</h1>
            </Title>
        </StyledTitle>
    );

    useEffect(() => {
        if (toggle || url.match(/\.mp4/g)) {
            setContent(<Loading />);
            axios
                .get("https://random.dog/woof.json")
                .then((response) => {
                    if (response.data.url?.match(/\.mp4/g)) return setToggle(true);

                    setUrl(response.data.url);
                    setContent(<img src={response.data.url} alt="Dog" />);
                })
                .catch((error) => {
                    console.log(error);
                    setContent(<Loading />);
                    setToggle(true);
                });
        }

        setToggle(false);
    }, [toggle]);

    return (
        <>
            <Title>
                <h1>Random</h1>
                <h1>Dog</h1>
            </Title>
            <PaperMui>
                <StyledButton fullWidth onClick={() => setToggle(true)}>
                    <FiRefreshCcw />
                    Get a random dog
                </StyledButton>
            </PaperMui>
            <ResultBox>{content}</ResultBox>
        </>
    );
}

export default RandomDog;

const StyledButton = styled(Button)`
    background-color: rgba(27, 162, 161, 1) !important;
    color: #fff !important;
    font-weight: 700 !important;

    svg {
        margin-right: 10px;
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
