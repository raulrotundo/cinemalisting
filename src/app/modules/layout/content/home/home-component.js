import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import SliderContainer from './slider/slider-container';

const HomeComponent = (props) => {
  const {
    settings,
    mostPopularMovies,
    moviesInTheaters,
    commingSoonMovies
  } = props;
  return (
    <div>
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 350, padding: '1em 0em' }}
        vertical
      >
        <Container text>
          <Header
            as='h1'
            content='Imagine-a-Company'
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
          />
          <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
          <Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
          </Button>
        </Container>
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
