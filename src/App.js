import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import FreeConsult from './components/FreeConsult/FreeConsult';
import Header from './components/Header/Header';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Departments from './components/Pages/Departments';
import Home from './components/Pages/Home';
import Page404 from './components/Pages/Page404';

function App() {
  return (
    <div style={{background:'#E9EEF7'}} className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/freeConsult' element={<FreeConsult></FreeConsult>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/departments' element={<Departments></Departments>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
