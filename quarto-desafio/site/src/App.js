import { useState } from 'react';

import { articles } from './articles';

import Header from './Header';
import Menu from './Menu';
import Wrapper from './Wrapper';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import Heading from './Heading';
import Copyright from './Copyright';

function App() {
  const [title, setTitle] = useState(articles[0].title);
  const [content, setContent] = useState(articles[0].content);

  return (
    <>
      <GlobalStyles />
      <Header>
        <Heading level={1} size="large">LLFilosofia</Heading>
      </Header>
      <Menu />
      <Wrapper>
        <Content article={{title, content}} />
        <Sidebar articles={articles} handleArticle={{setTitle, setContent}} />
      </Wrapper>
      <Footer>
        <Copyright />
      </Footer>
    </>
  );
}

export default App;
