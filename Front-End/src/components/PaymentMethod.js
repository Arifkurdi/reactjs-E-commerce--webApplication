import { CheckBox, CheckBoxOutlineBlankRounded } from "@material-ui/icons";
import React, { useState } from "react";

const PaymentMethod = ({ image }) => {
  const [check, setCheck] = useState(true);
  const [checkTwo, setCheckTwo] = useState(false);
  const [cardNum, setCardNum] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardInfo, setCardInfo] = useState();

  const canSumbit = Boolean(cardNum) && Boolean(cardDate);
  const sendCardInfo = () => {
    setCardInfo({ cardNumber: cardNum, cardDate: cardDate });
  };

  const CARDINFO = Boolean(cardInfo);
  return (
    <div className="Payment-ditails">
      <div
        className={`payment-method d-flex align-items-center flex-direction-center justify-content-center`}
      >
        <div className="method-one d-flex align-items-center flex-direction-center justify-content-center">
          <div className="check">
            <button
              className="check btn"
              type="button"
              onClick={() => {
                setCheck(!check);
                setCheckTwo(false);
              }}
            >
              {check ? <CheckBox /> : <CheckBoxOutlineBlankRounded />}
            </button>
          </div>
          <div className={`payment-company ${check ? "check" : ""}`}>
            PayPal <img src={image} alt="Payment Company Image" />
          </div>
        </div>
        <div className="method-two d-flex align-items-center flex-direction-center justify-content-center">
          <div className="check">
            <button
              className="check btn"
              type="button"
              onClick={() => {
                setCheckTwo(!checkTwo);
                setCheck(false);
              }}
            >
              {checkTwo ? <CheckBox /> : <CheckBoxOutlineBlankRounded />}
            </button>
          </div>
          <div className={`payment-company ${checkTwo ? "check" : ""}`}>
            On Arrive
            <img src={image} alt="Payment Company Image" />
          </div>
        </div>
      </div>
      {!CARDINFO ? (
        <div className={`posnal-informition ${checkTwo ? "" : ""}`}>
          <h6>Card Informition</h6>
          <form className="form" onSubmit={sendCardInfo}>
            <label className="form-label">Card Number *</label>
            <input
              className="form-control"
              type={"text"}
              name="card-number"
              placeholder="××××××××××××××"
              value={cardNum}
              onChange={(e) => setCardNum(e.target.value)}
              required
              disabled={`${!checkTwo ? "" : "disabled"}`}
              id="card-number"
            />
            <label className="form-label">Expird Date</label>
            <input
              id="card-date"
              onChange={(e) => setCardDate(e.target.value)}
              className="form-control"
              type={"date"}
              disabled={`${!checkTwo ? "" : "disabled"}`}
              name="ex-card"
              value={cardDate}
              required
            />
            <button
              type="submit"
              className="btn btn-info"
              disabled={!canSumbit || checkTwo}
            >
              Check
            </button>
          </form>
        </div>
      ) : (
        <>
          <h1>Ok</h1>
          <button className="btn btn-warning" onClick={() => setCardInfo("")}>
            {" "}
            EDIT!
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentMethod;
