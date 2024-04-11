import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import '../../page/home/home.css';
import logo_remove from '../../images/logo-removebg.png';
import './offcanvas.css';
import Navigation from '../navigation/navigation.jsx'
// import { NavLink } from 'react-router-dom';
function OffcanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className="offcanvas_menu" variant="primary" onClick={handleShow}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Offcanvas style={{maxWidth:'280px'}} show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img width="50px" height="50px" src={logo_remove} alt="logo_remove" /> MasterTask</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <nav>
            <ul>
              <li className={selectedNavItem === 'Home' ? 'active' : ''}>
                <NavLink to="/Home"> <button onClick={() => handleNavItemClicked('Home')}><i className="fa-solid fa-house"></i> Home</button></NavLink>
              </li>
              <li className={selectedNavItem === 'MyTask' ? 'active' : ''}>
                <NavLink to="/MyTask"><button onClick={() => handleNavItemClicked('MyTask')}><i className="fa-solid fa-cubes-stacked"></i> My Task</button></NavLink>
              </li>
              <li className={selectedNavItem === 'Notification' ? 'active' : ''}>
                <NavLink to="/Inbox"><button onClick={() => handleNavItemClicked('Notification')}><i className="fa-regular fa-envelope-open"></i> Notification</button></NavLink>
              </li>
            </ul>
          </nav> */}
          <Navigation></Navigation>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasExample;
