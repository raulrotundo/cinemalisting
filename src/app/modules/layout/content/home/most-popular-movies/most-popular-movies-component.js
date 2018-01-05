import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';

const HeaderComponent = () => (
  <Container text>
    <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
    <p style={{ fontSize: '1.33em' }}>
      Instead of focusing on content creation and hard work, we have learned how to master the art of doing
      nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
      and worth your attention.
    </p>
    <Button as='a' size='large'>Read More</Button>
  </Container>
)

export default HeaderComponent;
