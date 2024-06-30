import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Entradas from "../src/pages/Menu/Entradas.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { auth } from "./pages/firebase.js";
import {ShopContextProvider } from "./context/shop-context.jsx";


function App() {
  const [user, setUser]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user);
    }); 
  });

  return (
    <>
    <ShopContextProvider>
        <BrowserRouter>
            <Routes>
              <Route index  element={<Entradas/>} />
          </Routes>
          </BrowserRouter>
      </ShopContextProvider>
    </>
  )
}

export default App

