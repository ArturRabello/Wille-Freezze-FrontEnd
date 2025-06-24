import React from "react";
import AppRoutes from "./routes/AppRoutes";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {store} from "./app/store";
import './index.css';



function App(){
  return(
    <React.StrictMode>
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
    </React.StrictMode>
  );
}


export default App