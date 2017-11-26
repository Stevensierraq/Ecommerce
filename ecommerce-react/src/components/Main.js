import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import { TransitionGroup } from 'react-transition-group';

class Main extends Component {
  constructor(){
    super();

    this.state = {
      cart:[]
    }

  }


  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col sm={8}>
              <ProductList 
                products = {this.props.products}
                addToCart = {this.props.addToCart}
              />
            </Col>
            <Col sm={4}>
              <TransitionGroup>
                <ShoppingCart 
                  cart = {this.props.cart}
                  removeFromCart = {this.props.removeFromCart}
                />
              </TransitionGroup>
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

export default Main;