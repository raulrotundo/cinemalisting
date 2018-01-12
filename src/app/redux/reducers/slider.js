import * as types from 'constants/actionTypes';

const initialState = {
  settings: {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  },
  settingsTop: {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_SLIDER_SETTINGS:
      return Object.assign({}, state, {
        settings: action.settings
      });
    default: return state;
  }
}
