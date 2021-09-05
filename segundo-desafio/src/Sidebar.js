import Heading4 from './Heading4';
import Button from './Button';

function Sidebar({ articles }) {
  return (
    <aside className="sidebar">
      <Heading4>Artigos mais lidos</Heading4>
      <br />
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href="/">{article.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
