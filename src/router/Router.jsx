import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import App from '../App';


const RouterPage = () => {

  return (
       <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
  )
}

export default RouterPage