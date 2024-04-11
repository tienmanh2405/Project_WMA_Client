import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_remove from '../images/logo-removebg.png';
import Modal from 'react-bootstrap/Modal';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import '../App.css';
const Header = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    const handleCloseSignUpModal = () => setShowSignUpModal(false);
  const handleShowSignUpModal = () => setShowSignUpModal(true);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dayOfBirth: '',
    profileImg: '',
    agreeTerms: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
            <NavLink to="/" className="nav-link">
              <Navbar.Brand><img width="50px" height="50px" src={logo_remove} alt="logo_remove" /> MasterTask</Navbar.Brand>
            </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#sign-up" onClick={handleShowSignUpModal}>SignUp</Nav.Link>
                            <Nav.Link href="#login" onClick={handleShowLoginModal}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal
                show={showSignUpModal}
                onHide={handleCloseSignUpModal}
                backdrop="static"
          keyboard={false}
          centered
        >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            
            <Form.Group controlId="first-name">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                minLength="6"
                required
              />
            </Form.Group>
            <Form.Group controlId="confirm-password">
              <Form.Label>Re-Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                minLength="6"
                required
              />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Other"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="dayOfBirth">
              <Form.Label>Day of birth</Form.Label>
              <Form.Control
                type="date"
                name="dayOfBirth"
                value={formData.dayOfBirth}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="Profile_img">
              <Form.Label>Profile image</Form.Label>
              <Form.Control
                type="file"
                name="profileImg"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="check-box">
              <Form.Check
                type="checkbox"
                label="I agree to the terms of service"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSignUpModal}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">Sign Up</Button>
          </Modal.Footer>
          </Form>
            </Modal>

            <Modal
                show={showLoginModal}
                onHide={handleCloseLoginModal}
                backdrop="static"
                keyboard={false}
                centered
        >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            
      <div className="table-responsive">
        <table className="table">
          <tbody>
                    <tr>
              <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                className="input__type"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
              </Form.Group>
            </tr>
                    <tr>
              <Form.Group>   
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                className="input__type"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
               </Form.Group>
            </tr>
          </tbody>
        </table>
      </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLoginModal}>
                        Close
                    </Button>
                    <Button variant="primary"   type="submit">Login</Button>
          </Modal.Footer>  
      </Form>
            </Modal>
        </>
    );
}

export default Header;
