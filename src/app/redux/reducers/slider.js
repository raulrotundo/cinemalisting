import * as types from 'constants/actionTypes';

const initialState = {
  settings: {
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
