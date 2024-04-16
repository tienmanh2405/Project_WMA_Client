import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, PartitionOutlined, ProductOutlined, MessageOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(null, 'grp', null, [getItem('Home', 'home', <HomeOutlined />, null), getItem('My Task', 'mytask', <PartitionOutlined />, null), getItem('Notification', 'notification', <MessageOutlined />, null)], 'group'),
  getItem('Project', 'allproject', <ProductOutlined />, [
    getItem('Project 1', 'project'),
    getItem('Project 2', '2'),
  ]),
  {
    type: 'divider',
  }
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    // Lấy phần pathname từ địa chỉ URL
    const path = location.pathname.substr(1); // Bỏ đi dấu '/'
    setSelectedKey(path || 'project');
  }, [location]);
  const onClick = (e) => {
    navigate('/' + e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={[selectedKey]}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    >

    </Menu>
  );
};

export default Navigation;
