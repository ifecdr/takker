import React from 'react'
import LandingPage from './Pages/LandingPage';
import ProductPage from './Pages/ProductPage';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import FAQPage from './Pages/FAQPage';
import CartPage from './Pages/CartPage';
import  {Switch , Route } from 'react-router-dom'


 function App() {
  return (
    <div>
      <Switch>
      <Route path='/' exact>
        <LandingPage/>
      </Route>
      <Route path='/product'>
        <ProductPage/>
      </Route>      
      <Route path='/cart'>
        <CartPage/>
      </Route>
      <Route path='/contact'>
        <ContactPage/>
      </Route>
      <Route path='/login'>
        <LoginPage/>
      </Route>
      <Route path='/FAQ'>
        <FAQPage/>
      </Route>
      </Switch>
    </div>
  )
}
export default App;