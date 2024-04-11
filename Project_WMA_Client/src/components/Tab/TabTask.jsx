import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import './tab.css';
const TabTask = () => {
  return (
    <Tabs
      defaultActiveKey="upcoming"
      id="uncontrolled-tab-example"
          className="mb-3"  
          fill
    >
      <Tab eventKey="upcoming" title="Upcoming">
        Tab content for Home
      </Tab>
      <Tab eventKey="overdue" title="Overdue">
        Tab content for Profile
      </Tab>
      <Tab eventKey="completed" title="Completed">
        Tab content for Contact
      </Tab>
    </Tabs>
  )
}

export default TabTask