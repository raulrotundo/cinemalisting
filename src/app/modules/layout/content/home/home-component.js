import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import MostPopularMoviesContainer from './most-popular-movies/most-popular-movies-container';

const HomeComponent = () => {
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
      <Segment style={{ padding: '4em 0em' }} vertical>
        <MostPopularMoviesContainer />
      </Segment>
    </div>
  );
}

export default HomeComponent;
