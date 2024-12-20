import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_remove from '../../images/logo-removebg.png';
import { NavDropdown, Form, Col, Button, Row } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/auth";
import '../../App.css';
import apiProject from "../../api/project";
const Header_login = () => {
  const dispatch = useDispatch(); // Khởi tạo dispatch hook

  const handleLogout = () => {
    // Xóa access token và refresh token từ local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    // Dispatch action logout
    dispatch(logout());
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const search = await apiProject.searchProjects(searchQuery);
      if (search) {
        setSearchResults(search);
      } else {
        console.error('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <NavLink to="/home" className="nav-link">
          <Navbar.Brand><img width="50px" height="50px" src={logo_remove} alt="logo_remove" /> MasterTask</Navbar.Brand>
        </NavLink>
        <Form inline={'true'} onSubmit={handleSubmit}>
          <div className="position-relative">
            <Row className="search-container">
              <Col xs="auto" className="search-input">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </Col>
              <Col xs="auto">
                <Button className="seachButton" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
              </Col>
            </Row>
            <ul className="search-results">
              {searchResults.map((result) => (
                <li key={result._id}>
                  <a href={`/project/${result._id}`}>{result.nameProject}</a>
                </li>
              ))}
            </ul>
          </div>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={<i className="fa-solid fa-user"></i>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">Your profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={handleLogout}>
                Sign out {<i className="fa-solid fa-right-from-bracket"></i>}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header_login