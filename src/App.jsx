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
import NoneGrocery from './components/categoryList/NoneGrocery';
import Roastery from './components/categoryList/Roastery';
import Frozen from './components/categoryList/Frozen';
import PersonalCare from './components/categoryList/PersonalCare';
import BabyCare from './components/categoryList/BabyCare';
import HomeCare from './components/categoryList/HomeCare';
import PoojaNeeds from './components/categoryList/PoojaNeeds';
import Electronics from './components/categoryList/Electronics';
import HouseHold from './components/categoryList/HouseHold';
import ToysSports from './components/categoryList/ToysSports';
import SmallAppliance from './components/categoryList/SmallAppliance';
import Fishery from './components/categoryList/Fishery';
import Butchery from './components/categoryList/Butchery';
import HotFood from './components/categoryList/HotFood';
import Bakery from './components/categoryList/Bakery';
import BevarageDrink from './components/categoryList/BevarageDrink';

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
          <Route path='nonGrocery' element={<NoneGrocery />} />
          <Route path='beverageandDrinks' element={<BevarageDrink />} />
          <Route path='roastery' element={<Roastery />} />
          <Route path='frozenFoods' element={<Frozen />} />
          <Route path='personalCare' element={<PersonalCare />} />
          <Route path='babyCare' element={<BabyCare />} />
          <Route path='homeCare' element={<HomeCare />} />
          <Route path='pooja' element={<PoojaNeeds />} />
          <Route path='electronicsAndIT' element={<Electronics />} />
          <Route path='houseHold' element={<HouseHold />} />
          <Route path='toysAndSports' element={<ToysSports />} />
          <Route path='smallAppliance' element={<SmallAppliance />} />
          <Route path='fishery' element={<Fishery />} />
          <Route path='butchery' element={<Butchery />} />
          <Route path='hotFood' element={<HotFood />} />
          <Route path='bakery' element={<Bakery />} />
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
