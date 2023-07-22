import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />      
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
