import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, PartitionOutlined, ProductOutlined, MessageOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}



const Navigation = ({ projects }) => {
  const navigate = useNavigate();
  const projectItems = projects.map((project) => {
    return getItem(project.nameProject, project._id);
  });
  const items = [
    getItem(null, 'grp', null, [getItem('Home', 'home', <HomeOutlined />, null), getItem('My Task', 'mytask', <PartitionOutlined />, null), getItem('Notification', 'notification', <MessageOutlined />, null)], 'group'),
    getItem('Project', 'allproject', <ProductOutlined />, projectItems),
    {
      type: 'divider',
    }
  ];
  const onClick = (e) => {
    console.log(e.key);
    if (e.key === 'home' || e.key === 'mytask' || e.key === 'notification') {
      navigate('/' + e.key);
    } else {
      navigate('/project/' + e.key);
      window.location.reload();
    }
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}

      mode="inline"
      items={items}
    >

    </Menu>
  );
};

export default Navigation;
