import React, { useEffect, useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import '../../page/home/home.css';
import logo_remove from '../../images/logo-removebg.png';
import './offcanvas.css';
import Navigation from '../navigation/navigation.jsx'
import apiProject from '../../api/project/index.js';
// import { NavLink } from 'react-router-dom';
function OffcanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await apiProject.fetchProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Button className="offcanvas_menu" variant="primary" onClick={handleShow}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Offcanvas style={{ maxWidth: '280px' }} show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img width="50px" height="50px" src={logo_remove} alt="logo_remove" /> MasterTask</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Navigation projects={projects}></Navigation>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasExample;
