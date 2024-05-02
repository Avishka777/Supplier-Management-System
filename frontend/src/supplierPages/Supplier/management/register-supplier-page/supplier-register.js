import React, { useState } from "react";
import swal from "sweetalert2";
import AdminLayout from "../../../Layouts/AdminLayout";
import api from "../../../../supplierservices/supplierAPI";
import "./supplier-register.scss";

function SupplierRegistration() {
  const [formData, setFormData] = useState({
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

  const addSupplierFormHandler = (event) => {
    event.preventDefault();

    if (
      formData.agentID !== "" &&
      formData.businessType !== "" &&
      formData.supplierCategory !== "" &&
      formData.phone !== "" &&
      formData.email !== ""
    ) {
      api
        .post("/", formData)
        .then((response) => {
          console.log(response);
          swal.fire({
            icon: "success",
            iconColor: "#0D6BC2",
            title: "Success",
            text: "Supplier added to the Database!",
          });
          clearForm();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      swal.fire({
        icon: "error",
        iconColor: "#0D6BC2",
        title: "Operation Not Success",
        text: "Fill in all the relevant fields first",
      });
    }
  };

  // Handler for input changes
  const addSupplierInputHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to clear the form
  const clearForm = () => {
    setFormData({
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
  };

  return (
    <AdminLayout>
      <div className=".add-supplier-form-container">
        <form className="add-supplier-form-container" onSubmit={addSupplierFormHandler}>
          <span className="tagline-add-supplier">ADD SUPPLIER REGISTRATION</span><hr></hr>
          <div className="column-container">
            <div className="add-supplier-column">
              <span className="input-title">Company Name :</span>
              <input
                className="input-field"
                value={formData.companyName}
                name="companyName"
                onChange={addSupplierInputHandler}
              />

			        <span className="input-title">Agent Name :</span>
              <input
                className="input-field"
                value={formData.agentName}
                name="agentName"
                onChange={addSupplierInputHandler}
                pattern="^[^0-9]+$"
                title="Please Enter a Valid Agent Name (No Numbers)"
              />

			        <span className="input-title">Agent ID :</span>
              <input
                className="input-field"
                value={formData.agentID}
                name="agentID"
                onChange={addSupplierInputHandler}
              />              

              <span className="input-title">Email :</span>
              <input
                type="email"
                className="input-field"
                value={formData.email}
                name="email"
                onChange={addSupplierInputHandler}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                title="Please Enter Valid Email"
              />

              <span className="input-title">Phone :</span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                className="input-field"
                onChange={addSupplierInputHandler}
                pattern="[0-9]{10}"
                title="Enter Valid Phone No"
              />

              <span className="input-title">Company Address :</span>
              <input
                type="text"
                name="companyAddress"
                value={formData.companyAddress}
                className="input-field"
                onChange={addSupplierInputHandler}
              />

              <span className="input-title">Business Type :</span>
              <select
                className="input-field"
                name="businessType"
                value={formData.businessType}
                onChange={addSupplierInputHandler}
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

              <span className="input-title">Providing Brand :</span>
              <select
                className="input-field"
                name="supplierCategory"
                value={formData.supplierCategory}
                onChange={addSupplierInputHandler}
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

              <span className="input-title">Supplying Products :</span>
              <select
                className="input-field"
                value={formData.supplyingItem}
                name="supplyingItem"
                onChange={addSupplierInputHandler}
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
                  Register
                </button>
                <button type="reset" className="reset-btn" onClick={clearForm}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default SupplierRegistration;
