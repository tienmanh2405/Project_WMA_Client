import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_remove from '../images/logo-removebg.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    const handleCloseSignUpModal = () => setShowSignUpModal(false);
    const handleShowSignUpModal = () => setShowSignUpModal(true);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><img width="50px" height="50px" src={logo_remove} alt="logo_remove" /> MasterTask</Navbar.Brand>
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
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            <form id="action">
              <div
                class="table-responsive"
              >
                <table
                  class="table"
                >
                  <tbody>
                    <tr class="">
                      <td style={{width: '150px'}}><label htmlFor="first-name">Your name</label></td>
                      <td><input type="text" id="first-name" className="input__type" /></td>
                    </tr>
                    <tr class="">
                      <td ><label htmlFor="email">Email</label></td>
                      <td><input type="text" id="email" className="input__type" /></td>
                    </tr>
                    <tr class="">
                      <td><label htmlFor="password">Password</label></td>
                      <td><input type="password" id="password" className="input__type" /></td>
                    </tr>
                    <tr class="">
                      <td ><label htmlFor="confirm-password">Re-Password</label></td>
                      <td><input type="password" id="confirm-password" className="input__type" /></td>
                    </tr>
                    <tr class="">
                      <td ><label htmlFor="gender">Gender</label></td>
                      <td><input type="radio" id="gender" name="gender" className="gender"  value={'Male'}/>Male<input type="radio" id="gender" name="gender" className="gender" value={'Female'}/>Female<input type="radio" id="gender" name="gender" className="gender" value={'Other'}/>Other</td>
                    </tr>
                    <tr class="">
                      <td ><label htmlFor="dayOfBirth">Day of birth</label></td>
                      <td><input type="date" id="dayOfBirth" name="dayOfBirth" className="dayOfBirth"  /></td>
                    </tr>
                    <tr class="">
                      <td ></td>
                      <td><div className="check" style={{ display: 'flex', alignItems: 'center'}}>
                          <input type="checkbox" id="check-box" />
                          <label htmlFor="check-box" style={{ color: 'black'}}>
                              I agree to the terms of service
                          </label>
                      </div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
                  </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSignUpModal}>
                        Close
                    </Button>
                    <Button variant="primary">Sign Up</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showLoginModal}
                onHide={handleCloseLoginModal}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            <form action="">
                  <div
                    class="table-responsive"
                  >
                    <table
                      class="table "
                    >
                      <tbody>
                        <tr class="" style={{width: '150px'}}>
                      <td ><label htmlFor="email">Email</label></td>
                      <td><input type="text" id="email" className="input__type" /></td>
                    </tr>
                        <tr class="">
                      <td><label htmlFor="password">Password</label></td>
                      <td><input type="password" id="password" className="input__type" /></td>
                    </tr>
                      </tbody>
                    </table>
                  </div>
                  
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLoginModal}>
                        Close
                    </Button>
                    <Button variant="primary">Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Header;
