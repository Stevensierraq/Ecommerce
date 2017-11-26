import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon, Grid, Row, Col  } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { sendOrder } from '../requests/orders';
import './styles.css';



class Checkout extends Component {

  constructor(){
    super();

    this.state = {
      redirect: false
    }

    this.generateOrder =this.generateOrder.bind(this);
  }

  generateOrder(){
    const data ={
      products: this.props.cart,
      totalPrice: this.props.cart.reduce((sum, product) => sum + (product.price * product.quantity), 0)
    }
    sendOrder(data).then(data=>{
      this.submit(data);
      
    }).catch(console.log());
  }

  redirect(){

    this.setState({
      redirect: true
    });
    
  }

  submit = (data) => {
    confirmAlert({
      title: 'Confirm your Order :)',                        
      message: 'El precio de tu Orden es $'+ data.totalPrice,                      
      confirmLabel: 'Continue',                                                      
      onConfirm: () => this.redirect()        
    })
  };

  render() {

    if (this.state.redirect) {
        this.props.setCart();
            return <Redirect to='/' />;
          }

    return (
        <div>
          <Grid>
            <Row>
              <Col sm={8}>
                <div className="padding" >
                  <Link to="/" ><Glyphicon glyph="chevron-left" />Back</Link>
                </div>
                <Panel header="Shopping Cart" style={styles.panel}>
                    <Table fill>
                      <tbody>
                        {this.props.cart.map((product, index) =>
                            <tr key={index}>
                              <td>{product.name}</td>
                              <td>{product.quantity}</td>
                              <td className="text-right">${product.price * product.quantity}</td>
                              <td className="text-right"><Button bsSize="xsmall" bsStyle="info" className="icons" onClick={() => this.props.addToCart(product)}><Glyphicon glyph="plus" /></Button>
                              <Button bsSize="xsmall" bsStyle="warning" onClick={() => this.props.lessFromCart(product)}><Glyphicon glyph="minus" /></Button></td>
                            </tr>
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
                    <Button bsStyle="success"  role="button" onClick ={this.generateOrder} >Confirm <Glyphicon glyph="ok" /></Button>
                </Panel>
              </Col>
            </Row>
          </Grid>
        </div>
    )
  }
}

const styles = {
  footer: {
    fontWeight: 'bold'
  },
}

export default Checkout;