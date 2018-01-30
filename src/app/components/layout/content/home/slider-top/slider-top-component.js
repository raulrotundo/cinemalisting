import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Slider from 'react-slick';

const SliderComponent = (props) => {
  const { settings, sliderData } = props;
  return (
    <div>
      <Container>
        <Slider {...settings}>
          {sliderData.map((slider) =>
            <div key={slider.id}>
              <h3>
                <Image src={process.env.REACT_APP_POSTER_PATH_W500_H281 + slider.poster_path} alt={slider.title} rounded />
              </h3>
            </div>
          )}
        </Slider>
      </Container>
    </div>
  );
}

export default SliderComponent;
