import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getMovies } from 'redux/actions/home';
import HomeComponent from './home-component';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.getMovies = this.getMovies.bind(this);
  }

  componentWillMount() {
    // Most Popular Movies
    this.getMovies('mostPopularMovies', {
      sort_by: 'popularity.desc'
    });
    // In Theaters movies
    this.getMovies('moviesInTheaters', {
      'primary_release_date.gte': moment().subtract(1, 'year').format('YYYY-MM-DD'),
      'primary_release_date.lte': moment().format('YYYY-MM-DD')
    });
    // Comming Soon (Movies within a month forward from tomorrow date)
    this.getMovies('commingSoonMovies', {
      'primary_release_date.gte': moment().add(1, 'days').format('YYYY-MM-DD'),
      'primary_release_date.lte': moment().add(1, 'month').format('YYYY-MM-DD')
    });
  }

  getMovies(content, params) {
    this.props.getMovies(content, params);
  }

  render() {
    return <HomeComponent
      mostPopularMovies={this.props.mostPopularMovies}
      moviesInTheaters={this.props.moviesInTheaters}
      commingSoonMovies={this.props.commingSoonMovies}
    />;
  }
}

HomeContainer.propTypes = {
  mostPopularMovies: PropTypes.array.isRequired,
  moviesInTheaters: PropTypes.array.isRequired,
  commingSoonMovies: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return state.home;
}

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (content, params) => { dispatch(getMovies(content, params)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
