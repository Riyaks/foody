
import React from 'react';
import{ Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages';
import Navbar from './pages/Navbar';
import Contacts from './pages/Contacts';
import Oneone from './pages/Oneone';
import Register from './pages/Register';
import Reset from './pages/Reset';
import { CartProvider } from 'react-use-cart';
import Foods from './pages/Foods';
import Cart from './pages/Cart';







function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/foody" element={<Home />}>
       </Route>
       <Route path='/Contacts' Component={Contacts}/>
    <Route path='/Oneone' Component={Oneone}/>
    <Route path='/Register' Component={Register}/>
    <Route path='/Reset' Component={Reset}/>
    <Route path='/Foods' Component={Foods}/>
  <Route path='/Cart' Component={Cart}/>
    </Routes>
  </BrowserRouter>
  </CartProvider>
  );
}

export default App;

