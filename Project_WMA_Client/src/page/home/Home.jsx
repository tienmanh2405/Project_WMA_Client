import React, { useEffect, useState } from 'react';
import Header_login from '../../components/Header_login.jsx';
import moment from 'moment';
import OffcanvasExample from '../../components/offcanvas/offcanvas.jsx';
import './home.css'
import TabTask from '../../components/Tab/TabTask.jsx';
import axios from 'axios';
import { useSelector } from 'react-redux';
import TabProject from '../../components/tabProject/TabProject.jsx';
import axiosInstance from '../../api/axios.js';
import apiProject from '../../api/project/index.js';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const currentDate = moment().format('dddd, MMMM D');
  useEffect(() => {
    axios.get('http://localhost:3000/tasks/')
      .then(response => {
        setTasks(response.data.tasks);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);
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
  const { userInfo } = useSelector((state => state.auth));
  const userName = userInfo && userInfo.data ? userInfo.data.userName : '';
  return (
    <>
      <Header_login></Header_login>
      <div className="container-fluid">
        <div className="row" >
          <div style={{ display: 'flex', alignContent: 'center', margin: '20px 0' }}>
            <OffcanvasExample />
            <span className="page_title" >Home</span>
          </div>
          <div className="row">
            <div className="col-10 form_page">
              <div> <span style={{ fontSize: '16px', marginBottom: '4px', lineHeight: '20px', fontWeight: '500' }}>{currentDate}</span></div>
              <div><span style={{ fontSize: '32px', marginBottom: '4px', lineHeight: '40px' }}>Have a great day, {userName}</span></div>
              <div className='user-count'>
                <div className='count'>
                  <span><i className="fa-solid fa-diagram-project"></i></span><span>{projects.length}</span><span>Project</span>

                </div>
                <div className='count'>
                  <span><i className="fa-solid fa-cubes-stacked"></i></span><span>{tasks.length}</span><span>Tasks</span>
                </div>
              </div>
              <div className='row customizableHome'>
                <div className='col-5 customizableTab'>
                  <h6 className="mt-3 mb-3">My Task <i className="fa-solid fa-cubes-stacked"></i></h6>
                  <TabTask tasks={tasks} />
                </div>
                <div className='col-5 customizableTab'>
                  <h6 className="mt-3 mb-3">Projects</h6>
                  <TabProject projects={projects} />
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