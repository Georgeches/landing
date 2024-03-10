import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blogs from './components/Blogs';
import Questions from './components/Questions';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Blogs />
      <Questions />
      <Footer/>
    </div>
  );
}

export default App;
