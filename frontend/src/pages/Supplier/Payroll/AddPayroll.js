import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import "./AddPayroll.scss";
import { userRequest } from "../../../requestMethods";
import { toast } from "react-hot-toast";

const AddPayroll = () => {
  const [orderId, setOrderId] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [single, setSingle] = useState("");
  const [qty, setQty] = useState("");
  const [quality, setQuality] = useState("");
  const [damaged, setDamaged] = useState("");
  const [deduction, setDeduction] = useState("");
  const [net, setNet] = useState("");
  const [additional, setAdditional] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !orderId ||
      !itemCode ||
      !single ||
      !qty ||
      !quality ||
      !damaged ||
      !deduction ||
      !net
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    userRequest
      .post("/payroll", {
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
        toast.success("Payroll details added");
        handleReset();
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

  useEffect(() => {
    const calculateDeduction = () => {
      setDeduction(single * damaged);
    };

    const calculateNet = () => {
      setNet(single * quality);
    };

    calculateDeduction();
    calculateNet();
  }, [single, damaged, quality]);

  return (
    <AdminLayout>
      <form className="add-payroll-form-container" onSubmit={handleSubmit}>
        <span className="tagline-add-payroll">
          ADD SUPPLIER PAYMENT DETAILS<hr></hr>
        </span>
        <div className="column-container">
          <div className="add-payroll-column">
            <span className="input-title">Order ID :</span>
            <br></br>
            <input
              className="input-field"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              required
            />
            <br></br>
            <span className="input-title">Item Code :</span>
            <br></br>
            <input
              className="input-field"
              value={itemCode}
              onChange={(e) => setItemCode(e.target.value)}
              required
            />
            <br></br>
            <span className="input-title">Single Product Price :</span>
            <br></br>
            <input
              className="input-field"
              value={single}
              onChange={(e) => setSingle(e.target.value)}
              type="number"
              required
            />
            <br></br>
            <span className="input-title">Quantity :</span>
            <br></br>
            <input
              className="input-field"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              type="number"
              required
            />
            <br></br>
            <span className="input-title">Quality Product Amount :</span>
            <br></br>
            <input
              className="input-field"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              type="number"
              required
            />
            <br></br>
            <span className="input-title">Damaged Product Amount :</span>
            <br></br>
            <input
              className="input-field"
              value={damaged}
              onChange={(e) => setDamaged(e.target.value)}
              type="number"
              required
            />
            <br></br>
            <span className="input-title">Total Deduction Amount :</span>
            <br></br>
            <input className="input-field" value={deduction} readOnly />
            <br></br>
            <span className="input-title">Total Payment Amount :</span>
            <br></br>
            <input className="input-field" value={net} readOnly />
            <br></br>
            <span className="input-title">Enter Additional Details :</span>
            <br></br>
            <input
              className="input-field"
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
              type="text"
            />
            <br></br>
            <div className="btn-container-add-payroll">
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
};

export default AddPayroll;
