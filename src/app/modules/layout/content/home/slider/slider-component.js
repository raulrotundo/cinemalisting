import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import Slider from 'react-slick';

const SliderComponent = (props) => {
  const { settings, title } = props;
  const sliderInfo = [
    {
      id: 1,
      imgSrc: 'http://via.placeholder.com/143x231'
    },
    {
      id: 2,
      imgSrc: 'http://via.placeholder.com/143x231'
    },
    {
      id: 3,
      imgSrc: 'http://via.placeholder.com/143x231'
    },
    {
      id: 4,
      imgSrc: 'http://via.placeholder.com/143x231'
    },
    {
      id: 5,
      imgSrc: 'http://via.placeholder.com/143x231'
    },
    {
      id: 6,
      imgSrc: 'http://via.placeholder.com/143x231'
    },
    {
      id: 7,
      imgSrc: 'http://via.placeholder.com/143x231'
    },
    {
      id: 8,
      imgSrc: 'http://via.placeholder.com/143x231'
    }
  ];
  var divStyle = {
    slickPrev: {
      before: {
        color: 'black'
      }
    }
  };
  return (
    <Container>
      <h2>{title}</h2>
      <Slider {...settings} style={divStyle}>
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
