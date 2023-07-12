import './App.css';
import Nav from './components/Nav';
import Header from './components/Header'
import Abount from './components/Abount';
import Porfolio from './components/Porfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Notes from './components/Notes'

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <main>
        <Abount/>
        <Notes/>
        <Porfolio/>
        <Skills/>
        <Contact/>
      </main>
      <Footer/>

    </>
  );
}

export default App;
