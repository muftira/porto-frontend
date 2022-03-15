import './index.css';
import Navbar from './component/navbar';
import Home from './component/home';
import Footer from './component/footer';
import About from './component/about';
import Portofolio from './component/portofolio';
import { Routes, Route, Link } from "react-router-dom";
import Project from './component/project';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/porto' element={<Portofolio/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
