import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font: 'Roboto', 'Helvetica Neue', sans-serif;
    --font-title: 'Nunito', Times, serif;
    --font-size: 1.2rem;
    --color: #007bff;
    --color-light: #adf;
    --color-dark: #018;
    --radius: 0.2rem;
  }

  body,
  input,
  textarea,
  button {
    font-size: var(--font-size);
    font-family: var(--font);
  }

  h1,
  h2,
  h3, h4 {
    font-family: var(--font-title);
  }

  h1,
  h2,
  h3,
  p,
  ul {
    margin: 1rem 0;
  }
`;

export default GlobalStyles;
