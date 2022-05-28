import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.js";

import Repositories from './pages/Repositories/index.js';

export default function Rout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/repositories" element={<Repositories/>} />
      </Routes>
    </BrowserRouter>
  );
}