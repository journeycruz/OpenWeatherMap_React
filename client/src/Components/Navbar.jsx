import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar
        fixed='top'
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        className='shadow-lg p-3 mb-5 bg-dark'>
        <Container>
          <Navbar.Brand href='#home'>Weather-App</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              {/* <Nav.Link href='#features'>How It Works</Nav.Link> */}
              <NavDropdown
                title='Developer'
                id='collasible-nav-dropdown'
                menuVariant='dark'>
                <NavDropdown.Item
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/journeycruz/OpenWeatherMap_React'>
                  Fork this project
                </NavDropdown.Item>
                <NavDropdown.Item
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://webdevportfolio20.herokuapp.com/'>
                  Find more projects
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://openweathermap.org/api'>
                  Open Weather Map API
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link href='#deets'>
                Get Weather For My Current Location
              </Nav.Link> */}
              {/* <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
