import React from 'react';
import Sidebar from '../../supplierComponents/sidebar/Sidebar'; 
import Actionbar from '../../supplierComponents/actionbar/Acionbar'; 
import './adminLayout.scss'; 

// AdminLayout component
const AdminLayout = ({ children }) => {
  return (
    <div className='layoutWrapper'> 
      <Sidebar /> 
      <div className='rightContainer'> 
        <Actionbar /> 
        <div className='content'> 
          {children} 
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
