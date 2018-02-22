import React from 'react';
import { Image } from 'semantic-ui-react';
import Slider from 'react-slick';

const SliderComponent = (props) => {
  const { settings, sliderData } = props;
  return (
    <div className="slick-slider-top-container">
      <Slider {...settings}>
        {sliderData.map((slider) =>
          <div key={slider.id}>
            <Image src={process.env.REACT_APP_POSTER_PATH_HORIZONTAL + slider.poster_path} alt={slider.title} rounded />
          </div>
        )}
      </Slider>
    </div>
  );
}

export default SliderComponent;
