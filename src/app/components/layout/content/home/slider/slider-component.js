import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Slider from 'react-slick';

const SliderComponent = (props) => {
  const { settings, title, sliderData } = props;
  return (
    <div>
      <Container>
        <h2>{title}</h2>
        <Slider {...settings}>
          {sliderData.map((slider) =>
            <div key={slider.id}>
              <h3>
                <Image src={process.env.REACT_APP_POSTER_PATH_W185_H278 + slider.poster_path} alt={slider.title} rounded />
              </h3>
            </div>
          )}
        </Slider>
      </Container>
    </div>
  );
}

export default SliderComponent;
