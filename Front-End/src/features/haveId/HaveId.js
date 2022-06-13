import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pushId, selectHaveId, clearIds } from "./haveIdSlice";

const HaveId = () => {
  const [itemId, setItemId] = useState("0");
  const [idsCont, setIdsCont] = useState([]);
  const [Items, setItems] = useState([]);
  const push = useSelector(selectHaveId);
  const dispatch = useDispatch();

  const getItem = (e, id) => {
    e.preventDefault();
    if (itemId !== 0 && itemId !== "") {
      dispatch(pushId(id));
      setIdsCont(push);
      idsCont.forEach((item) => {
        fetch(`http:localhost:5000/favs/${item}`)
          .then((data) => data.json())
          .then((result) => setItems([...Items, result]));
        console.log(Items);
      });
    } else {
      console.log("Wait...");
    }
  };

  const cleatIdes = () => {
    dispatch(clearIds());
  };
  return (
    <div>
      <form onSubmit={(e) => getItem(e, itemId)}>
        <input
          onChange={(e) => {
            setItemId(e.target.value);
          }}
        />
        {/* <input type={"submit"} value={"Send"} /> */}
        <button type="submit">Get</button>
      </form>
      <button onClick={() => cleatIdes()}>Clear</button>
      {/* <div>{push}</div> */}
    </div>
  );
};

export default HaveId;
