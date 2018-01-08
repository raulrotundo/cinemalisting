import React, { Component } from 'react';
import SliderComponent from './slider-component';

class SliderContainer extends Component {

  constructor(props) {
    super(props);
    this.settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
  }

  render() {
    return <SliderComponent
      settings={this.settings}
      title={this.props.title}
    />;
  }
}

export default SliderContainer;