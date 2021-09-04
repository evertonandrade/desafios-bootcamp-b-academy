import Header from './Header';
import Menu from './Menu';
import MainSection from './MainSection';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Menu />
      <MainSection>
        <MainContent />
        <Sidebar />
      </MainSection>
      <Footer />
    </>
  );
}

export default App;
