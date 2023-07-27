import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./rtk/slices/products-slice";
import { addToCart } from "./rtk/slices/cart-slice";
import { Col, Row } from "react-bootstrap";

function Product() {
  const products=useSelector((state)=>state.products)
 
  const dispatch=useDispatch()
  console.log(products)
  useEffect(()=>{
    
    dispatch(fetchProducts())
     // eslint-disable-next-line
  },[])
  return (
    <div className="container mt-5">
      <Row className="py-5">
      
        {products.map((product)=>(
          <Col key={product.id} className="col col-sm-1 col-md-4 col-lg-3 py-2"style={{minWidth:"250px"}} >
          <Card >
          <Card.Img variant="top" height="300" width="150" style={{border:"1px solid #ccc",borderRadius:"5px" ,width:"150px",margin:"auto"}} src={product.image} />
          <Card.Body>
            <Card.Title style={{ height: "90px" ,fontSize:"1rem"}}>{product.title}</Card.Title>
            <Card.Title> Price : {product.price} $ </Card.Title>
            <Card.Text style={{ height: "150px", overflowY: "auto" }}>
              {product.description}
            </Card.Text>
            <Button className="card-footer" onClick={()=>dispatch(addToCart(product))} variant="primary">Add To Cart</Button>
          </Card.Body>
        </Card>
        </Col>
        ))}
      </Row>
    </div>
  );
}

export default Product;
