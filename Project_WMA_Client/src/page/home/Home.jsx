import React from 'react';
import Header_login from '../../components/Header_login.jsx';
import OffcanvasExample from '../../components/offcanvas.jsx';
import moment from 'moment';

import './home.css'
import TabTask from '../../components/Tab/TabTask.jsx';
const Home = () => {

  const currentDate = moment().format('dddd, MMMM D');

  return (
      <>
      <Header_login></Header_login>
      <div className="container-fluid">
        <div className="row" >
          <div style={{ display: 'flex', alignContent:'center',margin:'20px 0' }}>
            <OffcanvasExample />
            <span className="page_title" >Home</span>
          </div>
          <div className="row">
            <div className="col-10 form_page">
            <div> <span style={{ fontSize: '16px', marginBottom: '4px', lineHeight:'20px', fontWeight:'500' }}>{currentDate}</span></div>
            <div><span style={{ fontSize: '32px', marginBottom: '4px', lineHeight: '40px' }}>Have a great day,</span></div>
            <div className='user-count'>
              <div className='count'>
                <span><i className="fa-solid fa-diagram-project"></i></span><span>0</span><span>Project</span>
                
                </div>
              <div className='count'>
                <span><i className="fa-solid fa-check"></i></span><span>0</span><span>Tasks completed</span>
                </div>
              </div>
            <div className='row customizableHome'>
                <div className='col-5 customizableTab'>
                  <h6 className="mt-3 mb-3">My Task <i className="fa-solid fa-calendar-days"></i></h6>
                <TabTask />
              </div>
                <div className='col-5 customizableTab'>
                  <h6 className="mt-3 mb-3">Projects</h6>
              </div>
            </div>
            </div>
            
          </div>
          
      </div>
    </div>
      </>
  )
}

export default Home