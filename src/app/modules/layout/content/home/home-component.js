import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

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
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
          <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on content creation and hard work, we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
          <Button as='a' size='large'>Read More</Button>
        </Container>
      </Segment>
    </div>
  );
}

export default HomeComponent;
