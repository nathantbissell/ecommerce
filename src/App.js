import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Default from './components/Default'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <BrowserRouter basename='/ecommerce' />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/details' component={Details} />
          <Route exact path='/cart' component={Cart} />
          <Route exact component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}

export default App