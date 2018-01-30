import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SliderTopComponent from './slider-top-component';

class SliderTopContainer extends Component {

  render() {
    return (
      <div>
        <SliderTopComponent
          settings={this.props.settingsTop}
          sliderData={this.props.sliderData}
        />
      </div>
    );
  }
}

SliderTopContainer.propTypes = {
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return state.slider;
}

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderTopContainer);