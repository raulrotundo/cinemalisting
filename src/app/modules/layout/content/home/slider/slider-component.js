import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Slider from 'react-slick';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';

const SliderComponent = (props) => {
  const { settings, title } = props;
  const sliderInfo = MostPopularMoviesMock;
  return (
    <Container>
      <h2>{title}</h2>
      <Slider {...settings}>
        {sliderInfo.map((slider) =>
          <div key={slider.id}>
            <h3>
              <Image src={slider.imgSrc} as='a' href='http://google.com' rounded />
            </h3>
          </div>
        )}
      </Slider>
    </Container>
  );
}

export default SliderComponent;
