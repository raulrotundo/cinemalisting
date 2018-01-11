import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SliderComponent from './slider-component';

class SliderContainer extends Component {

  render() {
    return <SliderComponent
      settings={this.props.settings}
      title={this.props.title}
      sliderData={this.props.sliderData}
    />;
  }
}

SliderContainer.propTypes = {
  title: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return state.slider;
}

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);