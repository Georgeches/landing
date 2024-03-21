import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blogs from './components/Blogs';
import Questions from './components/Questions';
import Services from './components/Services';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogDetail from './components/BlogDetail';
import blogs from './data';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <Hero />
            <About/>
            <Services />
            <Blogs />
            <Questions />
            <Footer/>
          </div>
        }>
        </Route>

        <Route path='/blog/:id' element={<BlogDetail blogs={blogs}/>} />
      </Routes>
    </BrowserRouter>
        
  );
}

export default App;
