import styled from "styled-components";

import { StyledContainer as Container } from '../Container';

export default function Dashboard({ children, background }: { children: React.ReactNode, background: string }) {
    return (
        <Page background={background}>
            <StyledContainer width="90%" height="100%">
                {children}
            </StyledContainer>
        </Page>
    );
}

const StyledContainer: any = styled(Container)`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: row;
    padding: 0;

    & > * {
        text-align: initial;
    }
    @media (max-width: 600px) {
        flex-direction: column-reverse;
    }
`;

const Page = styled.div< { background: string } >`
background: ${props => props.background};
background-size: cover;
height: 90vh;
width: 100%;
padding: 20px;
display: flex;
align-items: center;
flex-direction: column;
font-size: 48px;
& > *:not(:last-child) {
  margin-bottom: 24px;
}
& > * {
  text-align: center;
}
@media (max-width: 600px) {
  padding: 0;
  height: 100vh;  
  max-height: -webkit-fill-available !important;
}
`;