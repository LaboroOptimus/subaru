import React from "react";
import { Carousel, Row, Col, Tabs } from "antd";

interface Props {
  product?: any;
}

const Slider: React.FC<Props> = ({ product }) => {
  function onChange(a: any) {
    console.log(a);
  }
  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <img className="dot-image" src={product.image} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel {...settings} afterChange={onChange} className="products-slider">
      <div className="slide">
        <img src={product.image} />
      </div>
      <div className="slide">
        <img src={product.image} />
      </div>
      <div className="slide">
        <img src={product.image} />
      </div>
    </Carousel>
  );
};

export { Slider };
