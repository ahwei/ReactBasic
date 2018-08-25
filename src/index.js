import React from "react";
import ReactDOM from "react-dom";

import Props from "./Props";
import State from "./State";
import HandelEvent from "./HandelEvent";

const View = HandelEvent;
function App() {
  return <View name="Hello React By Props" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
