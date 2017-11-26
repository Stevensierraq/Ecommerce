import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Navigate from './components/Nav';
import Main from './components/Main';
import Checkout from './components/Checkout';
import MyOrders from './components/MyOrders';
import {getProducts} from './requests/products';
import {getOrders} from './requests/orders';
import './App.css';


class App extends Component {
  constructor(){
    super();
        this.state = {
      products: [],
      cart:[],
      orders: []
    }

    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.lessFromCart = this.lessFromCart.bind(this)
    this.setCart = this.setCart.bind(this)

  }

  componentDidMount(){
    getProducts().then(jsonP=>{
      this.setState({
        products: jsonP
      })
    })

    getOrders().then(jsonP=>{
      this.setState({
        orders: jsonP
      })
    })

  }

  addToCart(product){

      const cart = this.state.cart
      const isAdd = this.state.cart.filter( add => add === product)

      if(isAdd.length > 0){
          cart.concat(product.quantity++)
        }else{
          product.quantity = 1
          cart.push(product)
        } 
   
      this.setState({
        cart
      })
    }

  removeFromCart(product){
    let cart = this.state.cart.filter( products => products!== product)
   
      this.setState({
        cart
      })

  }
  
  lessFromCart(product){

    let cart = this.state.cart

    if(product.quantity >> 1){
          cart.concat(product.quantity--)
        }else{
          cart = cart.filter( products => products!== product)
        } 
   
      this.setState({
        cart
      })
  }

  setCart(){
    this.setState({
        cart: []
      });
  }

  

  render() {
    return (
      <Router >
        <div>
          <Navigate />
          <Route exact path="/" render={()=> (
            <Main 
              products = {this.state.products}
              cart = {this.state.cart}
              addToCart = {this.addToCart}
              removeFromCart ={this.removeFromCart}
            />)
           } />
          <Route path="/checkout" component={ () =>
            <Checkout
              cart = {this.state.cart}
              addToCart = {this.addToCart}
              lessFromCart ={this.lessFromCart} 
              setCart = {this.setCart}
            />
            }/>
          <Route path="/Orders" component={ () =>
            <MyOrders
              orders = {this.state.orders}
            />
            }/>
          
        </div>
      </Router>
    );
  }
}

export default App;
