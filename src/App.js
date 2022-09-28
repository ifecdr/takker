import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import FAQ from './Pages/FAQ';
import './index.css';


export class App extends React.Component {
  render() {
    return (
      <div> 
        <Route path='/'>
          <Home/>
        </Route>
        <Route path='/product'>
          <Product />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/FAQ'>
          <FAQ />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </div>
    )
  }
}

export default App;