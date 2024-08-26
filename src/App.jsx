import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About';
import Products from './components/Products';
import Branch from './components/Branch';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Vegitables from './components/categoryList/Vegitables';
import Fruits from './components/categoryList/Fruits';
import Grocery from './components/categoryList/Grocery';
import Cosmetics from './components/categoryList/Cosmetics';
import Footwear from './components/categoryList/Footwear';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/*' element={<Products />}>
          {/* Default route to Vegitables when /products is accessed */}
          <Route index element={<Navigate to="vegitables" replace />} />
          <Route path='vegitables' element={<Vegitables />} />
          <Route path='fruits' element={<Fruits />} />
          <Route path='grocery' element={<Grocery />} />
          <Route path='cosmetics' element={<Cosmetics />} />
          <Route path='footwear' element={<Footwear />} />
        </Route>
        <Route path='/branch' element={<Branch />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
