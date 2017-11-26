import React, { Component } from 'react';
import { Image,Button, Glyphicon } from 'react-bootstrap';


class ProductList extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: props.products
    }
  }

  componentWillReceiveProps(newProps){
      if(newProps.products !== this.props.products){
        this.setState({
          products: newProps.products
        })
      }
    }

  render() {
    return (
      <div style={styles.products}>
        {this.state.products.map((product, index) =>
          <div className="thumbnail products" style={styles.product} key={index}>
            <Image  width={200} height={300} src={product.image} alt={product.name} responsive />
            <div className="caption">
              <h4>{product.name}</h4>
              <p style={styles.description}>{product.description}</p>
              <span>
                <Button bsStyle="primary" onClick={() => this.props.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

}

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '225px',
    marginLeft: 8,
    marginRight: 8
  },
  description: {
    color: 'grey'
  }
};

export default ProductList;