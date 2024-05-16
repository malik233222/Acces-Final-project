
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home';
import Layout from './components/Layout';
import About from './pages/home/About';
import Contact from './pages/home/Contact';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </>
  )
}

export default App
