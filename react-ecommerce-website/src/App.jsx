
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home';
import Layout from './components/Layout';
import About from './pages/home/About';
import Contact from './pages/home/Contact';
import SingleProduct from './pages/home/SingleProduct';
import Basket from './pages/home/Basket';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop/:id' element={<SingleProduct />} />
          <Route path='/basket' element={<Basket />} />


        </Route>
      </Routes>
    </Router>
  </>
  )
}

export default App
