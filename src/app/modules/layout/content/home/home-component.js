import React from 'react';
import { Segment } from 'semantic-ui-react';
import SliderContainer from './slider/slider-container';
import SliderTopContainer from './slider-top/slider-top-container';

const HomeComponent = (props) => {
  const {
    settings,
    mostPopularMovies,
    moviesInTheaters,
    commingSoonMovies,
    highestRatedMovies
  } = props;
  return (
    <div>
    <Segment
        inverted
        style={{ minHeight: 420, paddingTop: 100 }}
      >
        <SliderTopContainer sliderData={highestRatedMovies} />
      </Segment>
      {mostPopularMovies &&
        <Segment vertical>
          <SliderContainer settings={settings} title="Most Popular Movies" sliderData={mostPopularMovies} />
        </Segment>
      }
      {moviesInTheaters &&
        <Segment vertical>
          <SliderContainer settings={settings} title="In Theaters" sliderData={moviesInTheaters} />
        </Segment>
      }
      {commingSoonMovies &&
        <Segment vertical>
          <SliderContainer settings={settings} title="Comming Soon" sliderData={commingSoonMovies} />
        </Segment>
      }
    </div>
  );
}

export default HomeComponent;
