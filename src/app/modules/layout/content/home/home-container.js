import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from 'redux/actions/home';
import HomeComponent from './home-component';
import MostPopularMoviesMock from 'mock/most-popular-movies.json';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.getMovies = this.getMovies.bind(this);
  }

  componentWillMount() {
    this.getMovies('mostPopularMovies', { sort_by: 'popularity.desc' });
  }

  getMovies(content, params) {
    console.log(this.props.getMovies(content, params));
  }

  render() {
    return <HomeComponent
      mostPopularMovies={MostPopularMoviesMock}
    />;
  }
}

const mapStateToProps = state => {
  return state.home;
}

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (content, params) => { dispatch(getMovies(content, params)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
