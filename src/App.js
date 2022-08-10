import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Navbar from './components/Navbar';
// pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'

function App() {
  return (
    <div className="App">
      
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>


    </div>
  );
}

export default App;
