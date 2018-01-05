import React from 'react';
import { Button, Container, Image, Menu, Search } from 'semantic-ui-react';
import logoHeader from 'assets/images/logo.png';

const HeaderComponent = () => (
  <Container>
    <Menu fixed='top' inverted size='large'>
      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src={logoHeader}
            style={{ marginRight: '1.5em' }}
          />
          {process.env.REACT_APP_WEBSITE_NAME}
        </Menu.Item>
        <Menu.Item>
          <Search />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item className='item'>
            <Button as='a'>Log in</Button>
          </Menu.Item>
          <Menu.Item>
            <Button as='a' primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  </Container>
)

export default HeaderComponent;
