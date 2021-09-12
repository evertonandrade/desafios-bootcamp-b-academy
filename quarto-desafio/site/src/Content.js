import styled from 'styled-components';

import Heading from './Heading';
import Paragraph from './Paragraph'
import Button from './Button';

const MainContent = styled.main`
  width: 80vw;
  padding: 1rem 2rem;
  order: 2;
  border: 1px solid black;
`

function Content({ article }) {
  return (
    <MainContent>
      <article>
        <Heading level={1} size="normal">{article.title}</Heading>
        <Paragraph>{article.content}</Paragraph>
      </article>
      <p>...</p>
      <Heading level={2} size="small">Assine nosso plano premium para continuar a leitura!</Heading>
      <Button kind="primary">Assinar</Button>
    </MainContent>
  );
}

export default Content;
