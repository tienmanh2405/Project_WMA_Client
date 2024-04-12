import React, { useState } from 'react';
import Header_login from '../../components/Header_login';
import TableMyTask from '../../components/tableMyTask/TableMyTask';
import OffcanvasExample from '../../components/offcanvas/offcanvas';
import './Profile.css'; // Import CSS file for styling

const Profile = () => {
  const [editMode, setEditMode] = useState(false); // State to toggle edit mode

  // Function to handle edit button click
  const handleEditClick = () => {
    setEditMode(!editMode); // Toggle edit mode
  };

  return (
    <>
      <Header_login />
      <div className="container-fluid profile-container">
        <div className="row">
          <div style={{ display: 'flex', alignContent: 'center', margin: '20px 0' }}>
            <OffcanvasExample />
            <span className="page_title">Your Profile</span>
            
          </div>
          <div className="row">
            <div className="col-4 form_page-profile">
                <div className="row profile">
                        <img src="https://th.bing.com/th/id/OIP.JHELkzjGOg-DnhBCCdq4FQHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="anh dai dien" />
                    <div className='profile-content'>
                        <h2>Nguyen Tien Manh</h2> 
                       <span>Edit profile Now</span>           
                    </div>
                          </div>
                    <div className='row'>
                    <div class="profile-info">
                      <div className='profile-info-container'>
                        <span className="info-label">Your name:</span>
                        <span className="info-content">Nguyen Tien Manh</span>
                      </div>
                      <div className='profile-info-container'>
                        <span className="info-label">Email:</span>
                        <span className="info-content">john.doe@example.com</span>
                      </div>
                      <div className='profile-info-container'>
                        <span className="info-label">Gender:</span>
                        <span className="info-content">Male</span>
                      </div>
                      <div className='profile-info-container'>
                        <span className="info-label">Day of birth:</span>
                        <span className="info-content">01/01/1990</span>
                      </div>
                    </div>
                    </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
