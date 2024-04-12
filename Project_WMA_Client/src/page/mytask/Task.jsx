import React, { useState } from 'react'
import Header_login from '../../components/Header_login'
import TableMyTask from '../../components/tableMyTask/TableMyTask';
import OffcanvasExample from '../../components/offcanvas/offcanvas';
const Task = () => {
  return (
    <>
          <Header_login></Header_login>
        <div className="container-fluid">
            <div className="row" >
                <div style={{ display: 'flex', alignContent:'center',margin:'20px 0' }}>
                      <OffcanvasExample />
                      <span className="page_title" >My Task</span>
                  </div>
                <div className="row">
                    <div className="col-10 form_page">
                        <TableMyTask></TableMyTask>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Task