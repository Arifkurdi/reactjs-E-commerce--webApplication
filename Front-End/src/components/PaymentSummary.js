import React from "react";
import { useSelector } from "react-redux";
import { selectTotal } from "../features/product/productSlice";
import { selectSign } from "../features/profile/profileSlice";

const PaymentSummary = () => {
  const total = useSelector(selectTotal);

  let dCount = 20;
  let addSer = 10;
  const sign = useSelector(selectSign);

  // useDispatch(allPrices());

  return (
    <div className="payment-summary d-flex flex-direction-column">
      <h5 className="text-center">Payment Summary</h5>
      <div className="summary-card">
        {sign ? (
          <button className="btn log-state btn-success text-center text-upper w-100">
            Confierm Oreder
          </button>
        ) : (
          <button className="btn log-state btn-success text-center text-upper w-100">
            unregistered account
          </button>
        )}
        <div className="coupon">
          <div>
            <p>Regular Code:</p>
            <span className="text-upper">v12likui</span>
          </div>
          <form>
            <input
              className="form-control w-75"
              type={"text"}
              placeholder="COUBON CODE"
            />
            <button className="text-upper btn btn-primary">apply</button>
          </form>
        </div>
        <hr />
        <div className="calc">
          <div className="oreder-summary">
            <div>Order summary:</div>
            <span>{total}$</span>
          </div>
          <div>
            <div>Addtional Services:</div>
            <span>10$</span>
          </div>
          <div>
            <div>Discount (5%) :</div>
            <span>20$</span>
          </div>
          <div>
            <div>Total:</div>
            <span>{total + addSer - dCount}$</span>
          </div>
        </div>
        <hr />
        <div className="time-to-expiring text-upper text-center">
          sale expiring in: <span>21 hours 30 minutes</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
