import styled from 'styled-components';
import Heading from './Heading';
import TextLink from './TextLink';


const ArticleLink = styled.li`
  list-style: none;
`

const WrapperLink = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
`;

const Aside = styled.aside`
  order: 1;
  width: 20vw;
  padding: 2rem 1rem;
  border: 1px solid black;
`;

function Sidebar({ articles, handleArticle }) {
  function changeArticle(event, article) {
    event.preventDefault();
    handleArticle.setTitle(article.title);
    handleArticle.setContent(article.content);
  }

  return (
    <Aside>
      <Heading level={4} size="normal">Artigos mais lidos</Heading>
      <WrapperLink>
        {articles.map((article) => (
          <ArticleLink key={article.id}>
            <TextLink href="/" onClick={(event) => changeArticle(event, article)}>
              {article.title}
            </TextLink>
          </ArticleLink>
        ))}
      </WrapperLink>
    </Aside>
  );
}



export default Sidebar;
