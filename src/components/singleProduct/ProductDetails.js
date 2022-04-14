import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductDescription from './components/ProductDescription'
import ProductImage from './components/ProductImage'
import ProductTitle from './components/ProductTitle'
import Aos from 'aos';
import "aos/dist/aos.css";
    
function ProductDetails({product}) {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="product">
      <ProductTitle title={product?.title} />
      <Container>
        <Row>
          <Col lg={1}></Col>
          {/* descriptive card */}
          <Col
          data-aos="flip-left" data-aos-duration="1000"
           lg={5} md={12}>
            <ProductDescription product={product} />
          </Col>
          {/* Image Card */}
          <Col lg={5} data-aos="flip-right" data-aos-duration="1000">
            <ProductImage image={product?.image} title={product?.title} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetails