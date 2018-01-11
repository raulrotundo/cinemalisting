import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Slider from 'react-slick';

const SliderComponent = (props) => {
  const { settings, title, sliderData } = props;
  return (
    <Container>
      <h2>{title}</h2>
      <Slider {...settings}>
        {sliderData.map((slider) =>
          <div key={slider.id}>
            <h3>
              <Image src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + slider.poster_path} rounded />
            </h3>
          </div>
        )}
      </Slider>
    </Container>
  );
}

export default SliderComponent;
