import React from "react";
import ReactImageMagnify from "react-image-magnify";

function ProductImage({ image, title }) {
  return (
    <div className="product-image">
      {/* new banner */}
      <div className="price-container ">
        <div className="price">
          <span className="number">NEW</span>
        </div>
      </div>
      {/* image and magnifying lense */}
      {image ? (
        <ReactImageMagnify
          {...{
            imageClassName: "img",
            // enlargedImageContainerStyle: { marginTop: "100px" },
            enlargedImagePosition: "over",
            smallImage: {
              alt: { title },
              isFluidWidth: true,
              src: `${image}`,
            },
            largeImage: {
              src: `${image}`,
              width: 1200,
              height: 1800,
            },
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProductImage;
