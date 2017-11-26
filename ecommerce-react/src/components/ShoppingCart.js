import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import './styles.css';



class ShoppingCart extends Component {

  render() {
    return (
        <div>
        <Panel header="Shopping Cart" style={styles.panel}>
            <Table fill>
              <tbody>
                {this.props.cart.map((product, index) =>
                  <CSSTransition
                    timeout={2000}
                    classNames = "fade"
                    in = {this.props.in}
                    key={index}
                  >
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td className="text-right">${product.price * product.quantity}</td>
                      <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.props.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
                    </tr>
                  </CSSTransition>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" style={styles.footer}>
                    Total: ${this.props.cart.reduce((sum, product) => sum + (product.price * product.quantity), 0)}
                  </td>
                </tr>
              </tfoot>
            </Table>
            <Link to="/checkout">View</Link>
        </Panel>
        </div>
    )
  }
}

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

export default ShoppingCart;