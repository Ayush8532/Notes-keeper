import React from 'react'
import { Container, Navbar, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

const Header = ({setSearch}) => {
  const navigate = useNavigate();

  const dispatch= useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/")
  };

    return (
      <Navbar bg="primary" expand="lg" varient="dark">
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              NotesKeeper
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='m-auto'>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearch(e.target.value)} />
              </Form>
            </Nav>
            {userInfo ?(<Nav>
              <Nav.Link href="/mynotes">
                <Link to='/mynotes'>
                  My Notes
                </Link>
              </Nav.Link>
              <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>):(<Nav.Link href="/login">Login</Nav.Link>)}
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header