import './App.css';
import Nav from './components/Nav';
import Header from './components/Header'
import Abount from './components/Abount';
import Porfolio from './components/Porfolio';

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <main>
        <Abount/>
        <Porfolio/>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
