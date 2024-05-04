import React from 'react';
import Header from '../../components/header/Header.jsx';
import logo from '../../images/logo.jpg';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
    <>
      <Header></Header>
      <div className="section">
        <section className="content_about">
          <h1>Welcome to MasterTask!</h1>
          <p style={{ margin: "10px 0" }}>Streamline your workflow and increase productivity with MasterTask.
            Our intuitive platform helps you organize tasks, automate processes,
            and collaborate with your team more efficiently than ever before.</p>
          <NavLink to="/home"> <Button variant="dark" >Get Started</Button></NavLink>
        </section>
        <section className="content_image">
          <img src={logo} alt="logo" />
        </section>
      </div>
    </>
  )
}

export default About