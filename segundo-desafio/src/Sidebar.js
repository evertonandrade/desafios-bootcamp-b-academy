import Heading4 from './Heading4';

function Sidebar({ articles, handleArticle }) {
  function changeArticle(event, article) {
    event.preventDefault();
    handleArticle.setTitle(article.title);
    handleArticle.setContent(article.content);
  }

  return (
    <aside className="sidebar">
      <Heading4>Artigos mais lidos</Heading4>
      <br />
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href="/" onClick={(event) => changeArticle(event, article)}>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
