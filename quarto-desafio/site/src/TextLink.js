import styled from "styled-components";

const TextLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--color);
  transition: 0.3s ease color;
  padding: 0.2rem 0.4rem;

  &:hover {
    color: var(--color-dark);
  }
`;

export default TextLink;