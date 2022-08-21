import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/actions";
import "./App.css";

function App() {
  const counter = useSelector((count) => count);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <h1>{counter.counter}</h1>
      <button onClick={() => depositMoney()}>Deposit</button>
      <button onClick={() => withdrawMoney()}>withdraw</button>
    </div>
  );
}

export default App;
