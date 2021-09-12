import styled from "styled-components";

import Heading from "./Heading";
import TextLink from "./TextLink";

const Nav = styled.nav`
  border: 1px solid black;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;

const WrapperLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Link = styled(TextLink)`
  list-style: none;
  cursor: pointer;
`;


function Menu() {
  return (
    <Nav>
      <Heading level={2} size="small">Explorar</Heading>
      <WrapperLink>
        <Link>
          Analítica
        </Link>
        <Link>
         Continental
        </Link>
        <Link>
          Existencialista
        </Link>
      </WrapperLink>
    </Nav>
  );
}

export default Menu;
