import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import './tab.css';
const TabTask = ({ tasks }) => {
  const upcomingTasks = tasks.filter(task => {
    const date = new Date();
    const deadlineDate = new Date(task.dueDate);
    return date < deadlineDate && task.completed === false;
  });
  const overdueTasks = tasks.filter(task => {
    const date = new Date();
    const deadlineDate = new Date(task.dueDate);
    return date > deadlineDate && task.completed === false;
  });
  const completedTasks = tasks.filter(task => {
    return task.completed == true;
  });
  return (
    <Tabs
      defaultActiveKey="upcoming"
      id="uncontrolled-tab-example"
      className="mb-3 tabTask"
      fill
    >
      <Tab eventKey="upcoming" title="Upcoming">
        <span className="createTask">+ Create tasks</span>
        {upcomingTasks.map((task, index) => (
          <div className='menu_Task' key={index}>
            <span><i className="fa-regular fa-circle-check"></i> {task.description}</span>
            <span> <i className="fa-solid fa-calendar-days"></i></span>
          </div>
        ))}
      </Tab>
      <Tab eventKey="overdue" title="Overdue">
        {overdueTasks.map((task, index) => (
          <div className='menu_Task' key={index}>
            <span><i className="fa-regular fa-circle-check"></i> {task.description}</span>
            <span> <i className="fa-solid fa-calendar-days"></i></span>
          </div>
        ))}
      </Tab>
      <Tab eventKey="completed" title="Completed">
        {completedTasks.map((task, index) => (
          <div className='menu_Task' key={index}>
            <span><i className="fa-regular fa-circle-check"></i> {task.description}</span>
            <span> <i className="fa-solid fa-calendar-days"></i></span>
          </div>
        ))}
      </Tab>
    </Tabs>
  );
};

export default TabTask;