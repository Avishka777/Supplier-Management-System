import React, { useState, useEffect } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import "./EditPayroll.scss";
import { userRequest } from "../../../requestMethods";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function EditPayroll() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [single, setSingle] = useState("");
  const [qty, setQty] = useState("");
  const [quality, setQuality] = useState("");
  const [damaged, setDamaged] = useState("");
  const [deduction, setDeduction] = useState("");
  const [net, setNet] = useState("");
  const [additional, setAdditional] = useState("");

  useEffect(() => {
    userRequest
      .get("/payroll/" + id)
      .then((res) => {
        setOrderId(res.data.orderId);
        setItemCode(res.data.itemCode);
        setSingle(res.data.single);
        setQty(res.data.qty);
        setQuality(res.data.quality);
        setDamaged(res.data.damaged);
        setAdditional(res.data.additional);
        calculateDeduction(res.data.single, res.data.damaged);
        calculateNet(res.data.single, res.data.quality);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [id]);

  const calculateDeduction = (single, damaged) => {
    setDeduction(single * damaged);
  };

  const calculateNet = (single, quality) => {
    setNet(single * quality);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    userRequest
      .put("/payroll/" + id, {
        orderId,
        itemCode,
        single,
        qty,
        quality,
        damaged,
        deduction,
        net,
        additional,
      })
      .then((res) => {
        toast.success("Payroll Details updated");
        navigate("/admin/payroll/ManagePayroll");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleReset = () => {
    setOrderId("");
    setItemCode("");
    setSingle("");
    setQty("");
    setQuality("");
    setDamaged("");
    setDeduction("");
    setNet("");
    setAdditional("");
  };

  return (
    <AdminLayout>
      <form className="edit-payroll-form-container" onSubmit={handleSubmit}>
        <span className="tagline-edit-payroll">
          EDIT SUPPLIER PAYMENT DETAILS<hr></hr>
        </span>
        <div className="column-container">
          <div className="edit-payroll-column">
            <span className="input-title">Order ID :</span>
            <input
              className="input-field"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
            />
            <span className="input-title">Item Code :</span>
            <input
              className="input-field"
              value={itemCode}
              onChange={(e) => setItemCode(e.target.value)}
              required
            />
            <span className="input-title">Single Item Price :</span>
            <input
              className="input-field"
              value={single}
              onChange={(e) => {
                setSingle(e.target.value);
                calculateDeduction(e.target.value, damaged);
                calculateNet(e.target.value, quality);
              }}
              type="number"
              required
            />
            <span className="input-title">Quantity :</span>
            <input
              className="input-field"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              type="number"
              required
            />
            <span className="input-title">Quality Product Amount :</span>
            <input
              className="input-field"
              value={quality}
              onChange={(e) => {
                setQuality(e.target.value);
                calculateNet(single, e.target.value);
              }}
              type="number"
              required
            />
            <span className="input-title">Damaged Product Amount :</span>
            <input
              className="input-field"
              value={damaged}
              onChange={(e) => {
                setDamaged(e.target.value);
                calculateDeduction(single, e.target.value);
              }}
              type="number"
              required
            />
            <span className="input-title">Total Deduction Amount :</span>
            <input className="input-field" value={deduction} readOnly />
            <span className="input-title">Net Amount :</span>
            <input className="input-field" value={net} readOnly />
            <span className="input-title">Additional Details :</span>
            <input
              className="input-field"
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
            />
            <div className="btn-container-edit-payroll">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button type="reset" className="reset-btn" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

export default EditPayroll;
