import React, { Component } from 'react';
import { Modal,Panel, Table, Button, Glyphicon, Grid, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';



class MyOrders extends Component {

  constructor(props){
    super(props);

    this.state= {
      showModal: false,
      order: [],
      products:[]
    }

  }

  openOrder(order){
    this.setState({
      order,
      products: order.products,
      showModal: true
    })
  }

  closeModal(){
    this.setState({
      showModal: false
    })
  }



  render() {

    return (
        <div>
          <Grid>
            <Row>
              <Col sm={8}>
                <div className="padding" >
                  <Link to="/" ><Glyphicon glyph="chevron-left" />Back</Link>
                </div>
                <Panel header="Orders" style={styles.panel}>
                    <Table fill>
                      <tbody>
                        <tr>
                          <th>Date</th>
                          <th>Items</th>
                          <th>Total Price</th>
                        </tr>
                        {this.props.orders.map((order, index) =>
                            <tr key={index}>
                              <td>{order.date}</td>
                              <td>
                              {order.products.map((product, index)=>
                                <li>{product.name}</li>)}
                              </td>
                              <td>{order.totalPrice}</td>
                               <td className="text-right"><Button bsSize="small" bsStyle="primary" onClick = {()=>this.openOrder(order)} ><Glyphicon glyph="eye-open" /></Button></td>
                            </tr>
                        )}
                      </tbody>
                    </Table>
                </Panel>
              </Col>
            </Row>
          </Grid>
          <Modal show={this.state.showModal} >
          <Modal.Header closeButton>
            <Modal.Title>My Order</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{this.state.order.date}</p>
                <Panel style={styles.panel}>
                    <Table fill>
                      <tbody>
                        <tr className="color-grey">
                          <th>Name</th>
                          <th>Description</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                        {this.state.products.map((product, index) =>
                            <tr key={index}>
                              <td>{product.name}</td>
                              <td><p>{product.description}</p></td>
                              <td>{product.quantity}</td>
                              <td className="text-right">${product.price * product.quantity}</td>
                            </tr>
                        )}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td className="text-right">Total</td>
                          <td className="text-right bold">{this.state.order.totalPrice}</td>
                        </tr>
                      </tfoot>
                    </Table>
                    
                </Panel>

              </Modal.Body>
              <Modal.Footer>
            <Button onClick={()=> this.closeModal()}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
  }
}

const styles = {
  footer: {
    fontWeight: 'bold'
  },
  panel: {

  }
}

export default MyOrders;