import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { BiEdit } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import api from "../../../../services/supplierAPI";
import "sweetalert2/src/sweetalert2.scss";
import { useNavigate } from "react-router-dom";

export default function SupplierSearchResultsContainer(props) {
  const { suppliers, setFunc } = props;
  const navigate = useNavigate();

  // view function
  const viewItem = (id) => {
    navigate("/admin/supplier/view-supplier-details", { state: { id } });
  };

  // update function
  const updateItem = (id) => {
    navigate(`/admin/supplier/update-supplier-details`, { state: { id } });
    console.log(id);
  };

  // delete function
  const deleteItem = (deletingID) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        api
          .delete(`/${deletingID}`)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });

        const newSet = suppliers.filter((object) => {
          const { _id } = object;

          return _id !== deletingID;
        });

        console.log(newSet);
        setFunc(newSet);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  return (
    <div>
      {suppliers.reverse().map((singleItem) => {
        const {
          _id,
          companyName,
          agentName,
          agentID,
          supplierCategory,
          supplyingItem,
        } = singleItem;

        if (suppliers.length > 0) {
          return (
            <div style={{display:"flex" ,justifyContent:"flex-start" }} className="rning-short-item" key={_id}>
              <span className="item-field-manage-inventory" style={{display:"flex" ,justifyContent:"flex-start",position:"relative", marginRight:"5rem"}}>{companyName}</span>
              <span className="item-field-manage-inventory" style={{display:"flex" ,justifyContent:"flex-start",position:"relative", marginRight:"5rem"}}>{agentName}</span>
              <span className="item-field-manage-inventory"style={{display:"flex" ,justifyContent:"flex-start",position:"relative", marginRight:"5rem" }}>{agentID}</span>
              <span className="item-field-manage-inventory" style={{display:"flex" ,justifyContent:"flex-start",position:"relative",  marginRight:"3rem"}}>
                {supplierCategory}
              </span>
              <span className="item-field-manage-inventory" style={{display:"flex" ,justifyContent:"flex-start",position:"relative", }} >
                {supplyingItem}
              </span>
              <span className="item-field-manage-inventory" style={{marginLeft:"1rem"}}>
                {/* view button */}
                <button
                  className="action-btns-manage-inventory"
                  onClick={() => viewItem(_id)}
                >
                  <AiOutlineEye />
                </button>

                {/* update button */}
                <button
                  className="action-btns-manage-inventory"
                  onClick={() => updateItem(_id)}
                >
                  <BiEdit />
                </button>

                {/* delete button */}
                <button
                  className="action-btns-manage-inventory"
                  onClick={() => deleteItem(_id)}
                >
                  <AiOutlineDelete />
                </button>
              </span>
            </div>
          );
        }
      })}
    </div>
  );
}
