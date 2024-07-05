import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Layouts/AdminLayout";
import swal from "sweetalert2";
import api from "../../../../services/supplierAPI";
import "./update-supplier.scss";
import Swal from "sweetalert2";

import { useLocation, useNavigate } from "react-router-dom";

function UpdateSupplierDetails() {
  const navigate = useNavigate();

  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    api.get(`/mongo/${id}`).then((response) => {
      setUpdateSupplierFormData(response.data);
      console.log(response.data);
    });
  }, []);

  const [updateSupplierFormData, setUpdateSupplierFormData] = useState({
    _id: "",
    companyName: "",
    businessType: "",
    agentName: "",
    agentID: "",
    supplierCategory: "",
    supplyingItem: "",
    email: "",
    phone: "",
    companyAddress: "",
  });

  const updateSupplierFormHandler = (event) => {
    event.preventDefault();

    api
      .put(`/${id}`, updateSupplierFormData)
      .then((response) => {
        if (response) {
          Swal.fire({
            icon: "success",
            iconColor: "#0D6BC2",
            title: "Supplier Details Updated",
            text: "Changes are made to the supplier!",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          iconColor: "#0D6BC2",
          title: "Unsuccessful",
          text: "Please check again!",
        });
        console.log(error);
      });

    navigate("/admin/inventory/manage-suppliers");
  };

  const updateSupplierInputHandler = (event) => {
    setUpdateSupplierFormData({
      ...updateSupplierFormData,
      [event.target.name]: event.target.value,
    });
  };

  const backBtn = () => {
    navigate("/admin/inventory/manage-inventory");
  };

  return (
    <AdminLayout>
      <div className="add-supplier-container-main">
        {/* this is the form container */}
        <form
          className="add-supplier-form-container"
          onSubmit={updateSupplierFormHandler}
        >
          <span className="tagline-add-supplier">UPDATE SUPPLIER DETAILS</span>
          <hr></hr>
          {/* input field container */}
          <div className="column-container">
            {/* column one */}
            <div className="add-supplier-column">
              <section className="input-container">
                <span className="input-title">Company Name</span>
                <input
                  className="input-field"
                  value={updateSupplierFormData.companyName}
                  name="companyName"
                  onChange={updateSupplierInputHandler}
                />
              </section>
              <section className="input-container">
                <span className="input-title">Agent Name</span>
                <input
                  className="input-field"
                  value={updateSupplierFormData.agentName}
                  name="agentName"
                  onChange={updateSupplierInputHandler}
                />
              </section>
              <section className="input-container">
                <span className="input-title">Agent ID</span>
                <input
                  className="input-field"
                  value={updateSupplierFormData.agentID}
                  name="agentID"
                  onChange={updateSupplierInputHandler}
                />
              </section>

              <section className="input-container">
                <span className="input-title">Email</span>
                <input
                  type="email"
                  className="input-field"
                  value={updateSupplierFormData.email}
                  name="email"
                  onChange={updateSupplierInputHandler}
                />
              </section>
              <section className="input-container">
                <span className="input-title">Phone</span>
                <input
                  type="text"
                  name="phone"
                  value={updateSupplierFormData.phone}
                  className="input-field"
                  onChange={updateSupplierInputHandler}
                />
              </section>
              <section className="input-container">
                <span className="input-title">Company Address</span>
                <input
                  type="text"
                  name="companyAddress"
                  value={updateSupplierFormData.companyAddress}
                  className="input-field"
                  onChange={updateSupplierInputHandler}
                />
              </section>

              <section className="input-container">
                <span className="input-title">Business Type</span>
                <select
                  className="input-field"
                  name="businessType"
                  value={updateSupplierFormData.businessType}
                  onChange={updateSupplierInputHandler}
                >
                  <option className="select-option" value="undefined">
                    -- Select Business Type --
                  </option>
                  <option className="select-option" value="Manufacturers">
                    Manufacturers
                  </option>
                  <option className="select-option" value="Distributors">
                    Distributors
                  </option>
                  <option className="select-option" value="Wholesalers">
                    Wholesalers
                  </option>
                  <option className="select-option" value="3rd">
                    Third-Party Logistics Providers
                  </option>
                </select>
              </section>
              <section className="input-container">
                <span className="input-title">Providing Brand</span>
                <select
                  className="input-field"
                  value={updateSupplierFormData.supplierCategory}
                  name="supplierCategory"
                  onChange={updateSupplierInputHandler}
                >
                  <option className="select-option" value="">
                    -- Select Brand --
                  </option>
                  <option className="select-option" value="Asus">
                    Asus
                  </option>
                  <option className="select-option" value="Dell">
                    Dell
                  </option>
                  <option className="select-option" value="HP">
                    HP
                  </option>
                  <option className="select-option" value="Lenovo">
                    Lenovo
                  </option>
                  <option className="select-option" value="Apple">
                    Apple
                  </option>
                </select>
              </section>

              <span className="input-title">Supplying Products</span>
              <select
                className="input-field"
                value={updateSupplierFormData.supplyingItem}
                name="supplyingItem"
                onChange={updateSupplierInputHandler}
              >
                <option className="select-option" value="">
                  --Select Products--
                </option>
                <option className="select-option" value="Computers">
                  Computers
                </option>
                <option className="select-option" value="Laptop">
                  Laptop
                </option>
                <option className="select-option" value="Monitors">
                  Monitors
                </option>
                <option className="select-option" value="Printers">
                  Printers
                </option>
                <option className="select-option" value="Software">
                  Software
                </option>
              </select>

              <div className="btn-container-add-item">
                <button type="submit" className="submit-btn">
                  Update
                </button>
                <button
                  type="reset"
                  className="reset-btn"
                  onClick={() => {
                    navigate("/admin/inventory/manage-suppliers");
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default UpdateSupplierDetails;
