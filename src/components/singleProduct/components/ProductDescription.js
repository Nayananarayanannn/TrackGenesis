import React from "react";
import { Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ProductDescription({ product }) {
  const rating = (product?.rating.rate * 100) / 5;
  return (
    <div className="description-card">
      <div className="card">
        {/* front side details in card */}
        <div className="card__side card__side--front-1">
          <div className="card__title card__title--1">
            <a href="#" className="card__heading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Price : <b>${product?.price}</b>
            </a>
            <Rating
              ratingValue={rating}
              size="5vw"
              label
              transition
              fillColor="orange"
              emptyColor="gray"
              className="rating"
            />
            <div style={{ fontWeight: "bold" }}>
              {product?.rating?.count} Ratings
            </div>
          </div>
        </div>

        {/* backside details in card */}
        <div className="card__side card__side--back card__side--back-1">
          <div className="card__cta">
            <div className="card__price-box">
              <h5 style={{ color: "rgba(0,140,200,1)", textAlign: "center" }}>
                {product?.title}
              </h5>
              <p
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "5px 5px",
                  maxWidth: "fit-content",
                  fontWeight: "bold",
                }}
              >
                From {product?.category}
              </p>
              <p className="text">{product?.description}</p>
            </div>
            <Button className="cart-add">
              <span>
                <AiOutlineShoppingCart size={50} />
              </span>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
