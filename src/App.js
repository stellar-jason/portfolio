import React from "react";
import Main from "./components/MainComponent";
import {toast} from 'react-toastify';
import { BrowserRouter } from "react-router-dom";
import "./App.css";

toast.configure()
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
