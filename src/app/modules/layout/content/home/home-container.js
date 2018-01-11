import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from 'redux/actions/home';
import HomeComponent from './home-component';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.getMovies = this.getMovies.bind(this);
  }

  componentWillMount() {
    this.getMovies('mostPopularMovies', { sort_by: 'popularity.desc' });
    this.getMovies('moviesInTheaters', {
      'primary_release_date.gte': '2014-09-15',
      'primary_release_date.lte': '2014-10-22'
    });
  }

  getMovies(content, params) {
    this.props.getMovies(content, params);
  }

  render() {
    return <HomeComponent
      mostPopularMovies={this.props.mostPopularMovies}
      moviesInTheaters={this.props.moviesInTheaters}
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
