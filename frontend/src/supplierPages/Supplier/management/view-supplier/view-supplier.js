import AdminLayout from "../../../Layouts/AdminLayout";
import React, { useEffect, useState } from "react";
import "./view-supplier.scss";
import api from "../../../../supplierservices/supplierAPI";
import { useLocation, useNavigate } from "react-router-dom";

function ViewSupplierDetails() {
  const location = useLocation();
  const { id } = location.state;

  const [viewSupplierDetails, setViewSupplierDetails] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await api.get(`mongo/${id}`).then(
        (response) => {
          setViewSupplierDetails(response.data);
        },
        [setViewSupplierDetails]
      );
    };

    fetchData();
  });

  console.log(viewSupplierDetails);

  return (
    <AdminLayout>
      <div className="view-inventory-item-container">
        <div className="container">
          <div className="field-names-supplier">
            <div className="data-field">
              <span className="data-fields-supplier" style={{ fontSize: '22px' ,color: '#F4780E' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Company Name:</span>{" "}
              <span className="data-fields-supplier-values" style={{ fontSize: '22px' ,color: '#F4780E' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',fontWeight:'600'}}>
                {viewSupplierDetails.companyName}
              </span>
            </div>
			      <hr></hr>

            <div className="data-field">
              <span className="data-fields-supplier">Agent Name:</span>{" "}
              <span className="data-fields-supplier-values">
                {viewSupplierDetails.agentName}
              </span>
            </div>

            <div className="data-field">
              <span className="data-fields-supplier">Agent ID:</span>{" "}
              <span className="data-fields-supplier-values">
                {viewSupplierDetails.agentID}
              </span>
            </div>

            <div className="data-field">
              <span className="data-fields-supplier">Supplier Category:</span>{" "}
              <span className="data-fields-supplier-values">
                {viewSupplierDetails.supplierCategory}
              </span>
            </div>

            <div className="data-field">
              <span className="data-fields-supplier">Supplying Item:</span>{" "}
              <span className="data-fields-supplier-values">
                {viewSupplierDetails.supplyingItem}
              </span>
            </div>

            <div className="data-field">
              <span className="data-fields-supplier">Company Address:</span>{" "}
              <span className="data-fields-supplier-values">
                {viewSupplierDetails.companyAddress}
              </span>
            </div>

            <div className="data-field">
              <span className="data-fields-supplier">Business Type:</span>{" "}
              <span className="data-fields-supplier-values">
                {viewSupplierDetails.businessType}
              </span>
            </div>

            <div className="data-field">
              <span className="data-fields-supplier">Email:</span>{" "}
              <span className="data-fields-supplier-values">
                {viewSupplierDetails.email}
              </span>
            </div>

            <div className="data-field">
              <span className="data-fields-supplier">Phone:</span>{" "}
              <span className="data-fields-supplier-values">
                {viewSupplierDetails.phone}
              </span>
            </div>

            <div className="data-field">
              <span className="data-fields-supplier">Created At:</span>{" "}
              <span className="data-fields-supplier-values">
                {viewSupplierDetails.createdAt}
              </span>
            </div>

            <div className="data-field">
              <span className="data-fields-supplier">Updated At:</span>{" "}
              <span className="data-fields-supplier-values">
                {viewSupplierDetails.updatedAt}
              </span>
            </div>
			<br></br>
			<button
            className="view-item-back-btn"
            onClick={() => {
              navigate("/admin/inventory/manage-suppliers");
            }}
          >
            Back
          </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ViewSupplierDetails;
