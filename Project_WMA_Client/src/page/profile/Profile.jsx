import React, { useEffect, useState } from 'react';
import Header_login from '../../components/Header_login';
import OffcanvasExample from '../../components/offcanvas/offcanvas';
import './Profile.css';
import apiUser from '../../api/user';
import Modal from 'react-bootstrap/Modal';
import { Form, Button } from 'react-bootstrap';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import axiosInstance from '../../api/axios';

dayjs.extend(utc)

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    gender: '',
    phoneNumber: '',
    dayOfBirth: '',
    image: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await apiUser.getUser();
        setUserInfo(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (userInfo && userInfo.data) {
      setFormData({
        userName: userInfo.data.userName,
        email: userInfo.data.email,
        gender: userInfo.data.gender,
        phoneNumber: userInfo.data.phoneNumber,
        dayOfBirth: dayjs(userInfo.data.dayOfBirth).format('YYYY-MM-DD'),
        image: userInfo.data.image,
      });
    }
  }, [userInfo]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData(prevData => ({
      ...prevData,
      image: file
    }));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    console.log(formData);
  };

  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        handleCloseEditModal();
        setLoading(true);
        let Data = new FormData();
        Data.append('userName', formData.userName);
        Data.append('email', formData.email);
        Data.append('gender', formData.gender);
        Data.append('dayOfBirth', formData.dayOfBirth);
        Data.append('phoneNumber', formData.phoneNumber);
        Data.append('image', formData.image);

        const data = await axiosInstance.put('http://localhost:3000/users/', Data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setUserInfo(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setValidated(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);
  return (
    <div>
      {userInfo && userInfo.data && (
        <>
          {loading && <div className="loading">Loading&#8230;</div>}
          <Header_login />
          <div className="container-fluid profile-container">
            <div className="row">
              <div style={{ display: 'flex', alignContent: 'center', margin: '20px 0' }} >
                <OffcanvasExample />
                <span className="page_title">Your Profile</span>
              </div>
              <div className="row mt-5">
                <div className="col-6 form_page-profile">
                  <div className="row profile">
                    <img src={userInfo.data.image} alt="anh dai dien" />
                    <div className='profile-content'>
                      <h2>{userInfo.data.userName}</h2>
                      <span className='edit_profile' onClick={handleShowEditModal}>Edit profile Now</span>
                      <div className='row' style={{ backgroundColor: '#e0dedc' }}>
                        <div
                          className="table-responsive custom-table-background"
                        >
                          <table
                            className="table"
                          >
                            <tbody>
                              <tr className="">
                                <td scope="row"><span className="info-label">Your name:</span></td>
                                <td><span className="info-content">{formData.userName}</span></td>
                              </tr>
                              <tr className="">
                                <td scope="row"><span className="info-label">Email:</span></td>
                                <td><span className="info-content">{formData.email}</span></td>
                              </tr>
                              <tr className="">
                                <td scope="row"><span className="info-label">Gender:</span></td>
                                <td><span className="info-content">{formData.gender}</span></td>
                              </tr>
                              <tr className="">
                                <td scope="row"><span className="info-label">Day of birth:</span></td>
                                <td><span className="info-content">{formData.dayOfBirth}</span></td>
                              </tr>
                              <tr className="">
                                <td scope="row"><span className="info-label">Phone</span></td>
                                <td><span className="info-content">{formData.phoneNumber}</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <Modal
            show={showEditModal}
            onHide={handleCloseEditModal}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
              <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <Form.Group controlId="first-name">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder={userInfo.data.userName}
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
                    placeholder={userInfo.data.email}
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
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder={userInfo.data.phoneNumber}
                  />
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
                <Form.Group controlId="image">
                  <Form.Label>Profile image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    required
                  />
                </Form.Group>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>
                  Close
                </Button>
                <Button variant="primary" type="submit" onClick={(event) => handleSubmitEdit(event)}>Save changes</Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </>
      )}
    </div>

  );
};

export default Profile;
