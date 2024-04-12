import React, { useState } from 'react';
import { Table, DatePicker, Cascader, Input, Button } from 'antd';
import './TableProduct.css'; // Import CSS file for styling

const TableProduct = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tasks, setTasks] = useState([
    { key: 1, dueDate: null, priority: ['High'], taskProcess: ['In Progress'], description: 'Description 1' },
    { key: 2, dueDate: null, priority: ['Medium'], taskProcess: ['Not Started'], description: 'Description 2' },
    { key: 3, dueDate: null, priority: ['Low'], taskProcess: ['Done'], description: 'Description 3' },
    // Thêm các task khác tại đây nếu cần
  ]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleDateChange = (date, record) => {
    console.log('Due Date changed: ', date, ' for record: ', record);
    const updatedTasks = tasks.map(task => {
      if (task.key === record.key) {
        return { ...task, dueDate: date };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handlePriorityChange = (value, record) => {
    console.log('Priority changed: ', value, ' for record: ', record);
    const updatedTasks = tasks.map(task => {
      if (task.key === record.key) {
        return { ...task, priority: value };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskProcessChange = (value, record) => {
    console.log('Task Process changed: ', value, ' for record: ', record);
    const updatedTasks = tasks.map(task => {
      if (task.key === record.key) {
        return { ...task, taskProcess: value };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDescriptionChange = (e, record) => {
    console.log('Description changed: ', e.target.value, ' for record: ', record);
    const updatedTasks = tasks.map(task => {
      if (task.key === record.key) {
        return { ...task, description: e.target.value };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    const newKey = tasks.length + 1;
    const newTask = { key: newKey, dueDate: null, priority: ['Medium'], taskProcess: ['Not Started'], description: '' };
    setTasks([...tasks, newTask]);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const priorityOptions = [
    { value: 'High', label: 'High', className: 'priority-high' },
    { value: 'Medium', label: 'Medium', className: 'priority-medium' },
    { value: 'Low', label: 'Low', className: 'priority-low' },
  ];

  const taskProcessOptions = [
    { value: 'Not Started', label: 'Not Started', className: 'process-not-started' },
    { value: 'In Progress', label: 'In Progress', className: 'process-in-progress' },
    { value: 'Waiting', label: 'Waiting', className: 'process-waiting' },
    { value: 'Deferred', label: 'Deferred', className: 'process-deferred' },
    { value: 'Done', label: 'Done', className: 'process-done' },
  ];

  return (
    <div>
      <Button onClick={handleAddTask} style={{ marginBottom: 16 }}>Add Task</Button>
      <Table
        rowSelection={rowSelection}
        dataSource={tasks}
          >
            <Table.Column
              title="Description"
              render={(text, record) => (
                <Input.TextArea // Sử dụng Input.TextArea thay vì TextArea
                  value={record.description}
                  onChange={(e) => handleDescriptionChange(e, record)}
                />
              )}
            />
      
        <Table.Column title="Due Date" render={(text, record) => (
          <DatePicker value={record.dueDate} onChange={(date) => handleDateChange(date, record)} />
        )} />
        <Table.Column title="Priority" render={(text, record) => (
          <Cascader
            options={priorityOptions}
            value={record.priority}
            onChange={(value) => handlePriorityChange(value, record)}
            placeholder="Please select"
            className={priorityOptions.className}
          />
        )} />
        <Table.Column title="Task Process" render={(text, record) => (
          <Cascader
            options={taskProcessOptions}
            value={record.taskProcess}
            onChange={(value) => handleTaskProcessChange(value, record)}
            placeholder="Please select"
                      className={taskProcessOptions.className}
                     
          />
        )} />
        </Table>
    </div>
  );
};

export default TableProduct;
