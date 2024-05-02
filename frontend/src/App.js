import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import SupplierRegForm from "./supplierPages/Supplier/management/register-supplier-page/supplier-register";
import ManageSupplierWindow from "./supplierPages/Supplier/management/manage-supplier/manage-supplier";
import ViewSupplierDetails from './supplierPages/Supplier/management/view-supplier/view-supplier'
import UpdateSupplierDetails from './supplierPages/Supplier/management/update-supplier-page/update-supplier'
import AddPayroll from './supplierPages/Supplier/Payroll/AddPayroll';
import ManagePayroll from './supplierPages/Supplier/Payroll/ManagePayroll';
import EditPayroll from './supplierPages/Supplier/Payroll/EditPayroll';
import ViewPayroll from './supplierPages/Supplier/Payroll/ViewPayroll';


function App() {
  return (
    <Router>
      <Toaster />
      
      <Routes>

        <Route path="/admin/inventory/supplier-registration" element={<SupplierRegForm />}/>
        <Route path="/admin/inventory/manage-suppliers" element={<ManageSupplierWindow />}/>
        <Route path="/admin/supplier/view-supplier-details" element={<ViewSupplierDetails/>} />
        <Route path="/admin/supplier/update-supplier-details" element={<UpdateSupplierDetails/>} />
        <Route path='/admin/payroll/AddPayroll' element={< AddPayroll />} />
        <Route path='/admin/payroll/ManagePayroll' element={< ManagePayroll />} />
        <Route path='/admin/payroll/EditPayroll/:id' element={<EditPayroll />} />
        <Route path='/admin/payroll/ViewPayroll/:id' element={<ViewPayroll/>} />

      </Routes>
    </Router>
  )
}

export default App;