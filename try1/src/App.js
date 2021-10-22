import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './componentes/product';
import {BrowserRouter as Route, Switch} from 'react-router-dom'
import Header from './componentes/header';
import About from"./pages/about";
import Store from"./pages/store.js";
import Cart from"./pages/cart.js";

import {Component} from 'react';

const App = () => {
  return (
      <div className = "App"> 
         <Header/>
         <Product/>
       
       
   
      </div>


  )
}

export default App;
 























