import React from 'react';
import Header from '../components/Header.jsx';
import logo from '../images/logo.jpg';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
const About = () => {
    return (
      <>
        <Header></Header>
        <div className="section">
          <section className="content_about">
              <h1>Welcome to MasterTask!</h1>
              <p style={{ margin:"10px 0"}}>Streamline your workflow and increase productivity with MasterTask.
                  Our intuitive platform helps you organize tasks, automate processes,
                  and collaborate with your team more efficiently than ever before.</p>
             <NavLink to="/home"> <Button variant="dark" >Get Started</Button></NavLink>
          </section>
          <section className="content_image">
              <img src={logo} alt="logo"  />
          </section>
        </div>
        <div className="section_social-network">
                <h6>Social Network Integration by MasterTask</h6>
                <div className="social-network">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-tiktok"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                
        </div>
    </>
  )
}

export default About