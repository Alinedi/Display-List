import React from "react";
import Parent from "./Component/Parent";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import "./styles.css";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Parent />
      </div>
    </Provider>
  );
};

export default App;
