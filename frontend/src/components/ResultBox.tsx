import styled from "styled-components";

function ResultBox({ children }: { children: React.ReactNode }) {
    return <Container>{children}</Container>;
}

export default ResultBox;

const Container = styled.div`
    margin: 25px auto;
    height: 65%;
    background-color: rgba(27, 162, 161, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    img {
        max-height: 100%;
        max-width: 100%;
    }
`;
