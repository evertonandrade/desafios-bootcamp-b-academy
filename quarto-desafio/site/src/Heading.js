import styled, { css } from 'styled-components';

const theme = {
  colors: {
    white: '#fff',
    black: '#0000',
    gray: '#333',
    lightGray: '#ccc',
  },
  sizes: {
    xsmall: '1rem',
    small: '1.2rem',
    normal: '1.6rem',
    large: '2.4rem',
    xlarge: '3.2rem',
    xxlarge: '4rem',
  },
};

const Heading = styled('h1').attrs(({ level }) => ({ as: `h${level}` }))`
  ${({
    color = 'black',
    size = 'normal',
    fontWeight = 700,
    lineHeight = 1.5,
  }) => css`
    color: ${theme.sizes[color]};
    font-size: ${theme.sizes[size]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`;

export default Heading;
