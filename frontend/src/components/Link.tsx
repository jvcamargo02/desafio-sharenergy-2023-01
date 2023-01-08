import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Links({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <StyledLink to={href}>
    {children}
    </StyledLink>
  )
}

export default Links

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #222;

  &:hover {
    text-decoration: underline;
  }
`