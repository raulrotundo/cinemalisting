import * as types from 'constants/actionTypes';

export function setSliderSettings(settings) {
  return {
    type: types.SET_SLIDER_SETTINGS,
    settings
  };
}
