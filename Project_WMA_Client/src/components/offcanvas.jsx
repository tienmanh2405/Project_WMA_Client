import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import '../page/home/home.css';
function OffcanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="offcanvas_menu" variant="primary" onClick={handleShow}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Your offcanvas content goes here */}
          Hello, world!
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasExample;
