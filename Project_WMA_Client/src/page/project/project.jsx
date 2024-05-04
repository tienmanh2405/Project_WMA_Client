import React, { useEffect, useState } from 'react'
import Header_login from '../../components/Header_login'
import OffcanvasExample from '../../components/offcanvas/offcanvas';
import './project.css';
import TableProduct from '../../components/tableProduct/tableProduct';
import apiProject from '../../api/project';
import { useParams } from 'react-router-dom';
const Project = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState('');
  const [projects, setProjects] = useState([]);
  const { projectId } = useParams();
  // Hàm xử lý khi nhấp vào nội dung "Product"
  const handleProductClick = () => {
    setIsEditing(true); // Kích hoạt chế độ chỉnh sửa
  };
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await apiProject.fetchProjectById(projectId);
        setProjects(projectsData);
        setProduct(projectsData.nameProject);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);
  // Hàm xử lý khi kết thúc chỉnh sửa
  const handleBlur = (e) => {
    setIsEditing(false); // Tắt chế độ chỉnh sửa
    setProduct(e.target.value); // Lưu nội dung mới của "Product"
  };

  return (
    <>
      <Header_login></Header_login>
      <div className="container-fluid">
        <div className="row" >
          <div style={{ display: 'flex', alignContent: 'center', margin: '20px 0' }}>
            <OffcanvasExample projects={projects} />
            {isEditing ? (
              <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                onBlur={handleBlur} // Xử lý khi mất focus khỏi input
                autoFocus // Tự động focus vào input khi hiển thị
              />
            ) : (
              // Nếu không, hiển thị nội dung "Product" như bình thường
              <span className='page_title' onClick={handleProductClick}>{product} <i className="fa-solid fa-pen"></i></span>
            )}
          </div>
          <div className="row">
            <div className="col-10 form_page">
              <TableProduct projectId={projectId}></TableProduct>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Project