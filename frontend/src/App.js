import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// inventory components
import SupplierRegForm from "./pages/Supplier/management/register-supplier-page/supplier-register";
import ManageSupplierWindow from "./pages/Supplier/management/manage-supplier/manage-supplier";
import ViewSupplierDetails from "./pages/Supplier/management/view-supplier/view-supplier";
import UpdateSupplierDetails from "./pages/Supplier/management/update-supplier-page/update-supplier";
//payroll management
import AddPayroll from "./pages/Supplier/Payroll/AddPayroll";
import ManagePayroll from "./pages/Supplier/Payroll/ManagePayroll";
import EditPayroll from "./pages/Supplier/Payroll/EditPayroll";
import ViewPayroll from "./pages/Supplier/Payroll/ViewPayroll";

function App() {
  return (
    <Router>
      <Toaster />

      <Routes>
        {/* inventory routes */}

        <Route
          path="/admin/inventory/supplier-registration"
          element={<SupplierRegForm />}
        />
        <Route
          path="/admin/inventory/manage-suppliers"
          element={<ManageSupplierWindow />}
        />
        <Route path="/admin/inventory/report" />
        <Route
          path="/admin/supplier/view-supplier-details"
          element={<ViewSupplierDetails />}
        />
        <Route
          path="/admin/supplier/update-supplier-details"
          element={<UpdateSupplierDetails />}
        />

        <Route path="/admin/payroll/AddPayroll" element={<AddPayroll />} />
        <Route
          path="/admin/payroll/ManagePayroll"
          element={<ManagePayroll />}
        />
        <Route
          path="/admin/payroll/EditPayroll/:id"
          element={<EditPayroll />}
        />
        <Route
          path="/admin/payroll/ViewPayroll/:id"
          element={<ViewPayroll />}
        />
      </Routes>
    </Router>
  );
}

export default App;
