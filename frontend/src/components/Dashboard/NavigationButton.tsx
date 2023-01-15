import styled from "styled-components";

export default function NavigationButton({ children, active }: { children: React.ReactNode; active: boolean }) {
    return <Button active={active}>{children}</Button>;
}

const Button = styled.button<any>`
    width: 100%;
    height: 100px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 500;
    ${(props) => (props.active ? "background-color: #ccc;" : "")}
    &:hover {
        background-color: #ccc;
    }
    & > *:not(:last-child) {
        margin-bottom: 4px;
    }
    & > *:first-child {
        font-size: 28px;
        color: rgba(27, 162, 161, 1);
    }
    @media (max-width: 600px) {
        height: 80px;
    }
`;
