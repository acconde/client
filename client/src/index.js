import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppHome from './Apphome';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./utils/store";
import {Provider} from "react-redux";
import history from "./utils/history";




const store = configureStore({}, history);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    
    <Provider store={store}>
      <App />
      {/* <AppHome /> */}
    </Provider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
