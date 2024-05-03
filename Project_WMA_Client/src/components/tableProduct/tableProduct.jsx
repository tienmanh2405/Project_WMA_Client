import React, { useEffect, useState } from 'react';
import { Table, DatePicker, Cascader, Input, Button } from 'antd';
import './TableProduct.css'; // Import CSS file for styling
import apiTask from '../../api/task';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

dayjs.extend(utc)

const TableProduct = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  let counter = 1;
  useEffect(() => {
    const fetchTasksByProject = async () => {
      try {
        const getTask = await apiTask.getTaskByProject(projectId);
        const taskByProject = getTask.map((task) => {
          const taskKey = task.key || counter++;
          const dueDate = task.dueDate ? dayjs(task.dueDate).utc() : null;
          return { key: taskKey, dueDate, priority: task.priority, taskProcess: task.taskProcess, description: task.description, taskId: task._id };
        });
        setTasks(taskByProject);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasksByProject();
  }, []);
  const onSelectChange = (newSelectedRowKeys) => {

    const taskKeys = tasks.map(task => task.key);

    const filteredSelectedRowKeys = taskKeys.filter(key => newSelectedRowKeys.includes(key));

    console.log('selectedRowKeys changed: ', filteredSelectedRowKeys);
    setSelectedRowKeys(filteredSelectedRowKeys);
  };


  const handleDateChange = async (date, record) => {
    try {
      const updatedTask = { ...record, dueDate: date };
      await apiTask.fetchUpdateTask(record.taskId, updatedTask);
      const updatedTasks = tasks.map(task => {
        if (task.key === record.key) {
          return updatedTask;
        }
        return task;
      });
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handlePriorityChange = async (value, record) => {
    try {
      const taskPriority = value.join();
      const updatedTask = { ...record, priority: taskPriority };
      await apiTask.fetchUpdateTask(record.taskId, updatedTask);
      const updatedTasks = tasks.map(task => {
        if (task.key === record.key) {
          return updatedTask;
        }
        return task;
      });
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating priority:', error);
    }
  };

  const handleTaskProcessChange = async (value, record) => {
    try {
      const taskProcess = value.join();
      const updatedTask = { ...record, taskProcess: taskProcess };
      await apiTask.fetchUpdateTask(record.taskId, updatedTask);
      const updatedTasks = tasks.map(task => {
        if (task.key === record.key) {
          return updatedTask;
        }
        return task;
      });
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task process:', error);
    }
  };

  const handleDescriptionChange = async (e, record) => {
    try {
      const updatedTask = { ...record, description: e.target.value };
      await apiTask.fetchUpdateTask(record.taskId, updatedTask);
      const updatedTasks = tasks.map(task => {
        if (task.key === record.key) {
          return updatedTask;
        }
        return task;
      });
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating description:', error);
    }
  };


  const handleAddTask = async () => {
    try {
      const newKey = tasks.length + 1;
      const newTask = { key: newKey, project: projectId, dueDate: null, priority: 'Medium', taskProcess: 'Not Started', description: '' };
      await apiTask.fetchCreateTask(newTask);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Error creating description:', error);
    }

  };

  const handleDeleteTask = async () => {
    try {
      for (const key of selectedRowKeys) {
        const taskToDelete = tasks.find(task => task.key === key);
        if (taskToDelete) {
          await apiTask.fetchDeleteTask(taskToDelete._id);
        }
      }
      const updatedTasks = tasks.filter(task => !selectedRowKeys.includes(task.key));
      setTasks(updatedTasks);
      setSelectedRowKeys([]);
    } catch (error) {
      console.error('Error deleting tasks:', error);
    }
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

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  return (
    <div>
      <Button onClick={handleAddTask} style={{ width: '100px', marginBottom: 16 }}>Add Task</Button>
      <Button onClick={handleDeleteTask} style={{ width: '100px', marginBottom: 16 }}>Delete Task</Button>
      <Table
        rowSelection={rowSelection}
        dataSource={tasks}
        pagination={{ pageSize: 4 }}
      >
        <Table.Column
          title="Description"
          render={(text, record) => (
            <Input.TextArea
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
          />
        )} />
        <Table.Column title="Task Process" render={(text, record) => (
          <Cascader
            options={taskProcessOptions}
            value={record.taskProcess}
            onChange={(value) => handleTaskProcessChange(value, record)}
            placeholder="Please select"

          />
        )} />
      </Table>
    </div>
  );
};

export default TableProduct;
