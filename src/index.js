import App from "./App";
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from "react-hot-loader";
import { unstable_refresh as refresh } from "react-refresh/runtime";
import { enableMapSet } from "immer";
enableMapSet();

const rootEl = document.getElementById("root");

function render() {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    rootEl
  );
}

render();

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });

  module.hot.addStatusHandler((status) => {
    if (status === "prepare") refresh();
  });
}
