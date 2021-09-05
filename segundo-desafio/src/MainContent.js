import Heading2 from './Heading2';
import Heading4 from './Heading4';
import Button from './Button';

function MainContent({ article }) {
  return (
    <main className="content">
      <article>
        <Heading2>{article.title}</Heading2>
        <p>{article.content}</p>
      </article>
      <p>...</p>
      <Heading4>Assine nosso plano premium para continuar a leitura!</Heading4>
      <Button kind="primary">Assinar</Button>
    </main>
  );
}

export default MainContent;
