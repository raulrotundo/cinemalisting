import * as types from 'constants/actionTypes';
import * as actions from './slider';

describe('Slider actions', () => {
  it('Should create an action to set a slider settings', () => {
    const settings = [];
    const expectedAction = {
      type: types.SET_SLIDER_SETTINGS,
      settings
    };

    expect(actions.setSliderSettings(settings)).toEqual(expectedAction)
  })
})