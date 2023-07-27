import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "./rtk/slices/cart-slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <div className="py-5 container">
      <Row className="mt-3">
        <Col>
          <h1>Welcome To Cart</h1>
        </Col>
        <Col>
          <Button variant="danger" onClick={() => dispatch(clear())}>
            Clear Cart
          </Button>
        </Col>
      </Row>
      <h4>Total Price : {totalPrice} $</h4>
      
          <Table striped bordered hover>
            <thead>
              <tr>
                
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr key={item.id} className="TD">
                    <td><small>{item.title}</small> </td>
                    <td>
                      <img src={item.image} className="itemImg" alt="" />
                    </td>
                    <td>{item.price} $</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => dispatch(deleteFromCart(item))}
                      >
                        Delete
                      </Button>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        
    </div>
  );
};

export default Cart;
