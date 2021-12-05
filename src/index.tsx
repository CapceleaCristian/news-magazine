import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./redux-toolkit/store";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
