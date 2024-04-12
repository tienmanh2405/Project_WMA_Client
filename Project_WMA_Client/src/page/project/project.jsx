import React, { useState } from 'react'
import Header_login from '../../components/Header_login'
import OffcanvasExample from '../../components/offcanvas/offcanvas';
import './project.css';
import TableProduct from '../../components/tableProduct/tableProduct';
const Project = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [product, setProduct] = useState('Product');

  // Hàm xử lý khi nhấp vào nội dung "Product"
    const handleProductClick = () => {
      setIsEditing(true); // Kích hoạt chế độ chỉnh sửa
    };

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
          <div style={{ display: 'flex', alignContent:'center',margin:'20px 0' }}>
            <OffcanvasExample />
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
                  <TableProduct></TableProduct>
                </div>
          </div>
          
      </div>
            </div>
     </>
  )
}

export default Project