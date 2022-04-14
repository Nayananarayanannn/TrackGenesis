import React, { useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { ApiState } from "../../context/ApiProvider";

function ProductCarousel() {
  useEffect(() => {
    Aos.init({});
  }, []);

  const { api, setApi } = ApiState();

  return (
    <div>
      {api ? (
        <div className="carousel-slider">
          {/* Carousel Title */}
          <h2
            data-aos="flip-down"
            data-aos-duration="1000"
            style={{
              color: "white",
              fontFamily: "cursive",
              paddingBottom: "5vh",
            }}
          >
            Our Exciting products
          </h2>
          {/*Carousel Slider  */}
          <Slider
            dots={false}
            slidesToShow={2}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={1500}
          >
            {api?.map((product, key) => {
              return (
                <>
                  {/* single product cards */}
                  <Card
                    key={key}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                    style={{
                      width: "18rem",
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      boxShadow: "10px 10px 10px rgba(100,100,100,1)",
                    }}
                  >
                    <Card.Img
                      style={{ height: "50%" }}
                      variant="top"
                      src={product?.image}
                    />
                    <Card.Body
                      style={{
                        borderRadius: "0px 0px 20px 20px",
                        backgroundColor: "white",
                      }}
                    >
                      <Card.Title>{product?.title}</Card.Title>
                      <Card.Text style={{ color: "red" }}>
                        <b> $ {product?.price} </b>
                      </Card.Text>
                      <Button href={`/${product?.id}`} className="view-details">
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </Slider>
        </div>
      ) : (
        <>
          <img
            style={{ paddingTop: "10vh" }}
            src="https://my.coolstart.com/templates/default/img/games_loading.gif"
            alt="loading"
          />
        </>
      )}
    </div>
  );
}

export default ProductCarousel;
