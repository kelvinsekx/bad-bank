import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home";
import AllData from "./pages/all-data";
import CreateAccount from "./pages/create-account";
import Withdraw from "./pages/withdraw"
import Deposit from "./pages/deposit";
import NoPage from "./pages/NoPage";

import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
            index 
            element={<Home />} 
          />
          <Route 
            path="all-data" 
            element={<AllData />} 
          />
          <Route 
            path="create-account" 
            element={<CreateAccount />} 
          />
          <Route 
            path="withdraw" 
            element={<Withdraw />} 
          />
          <Route 
            path="deposit" 
            element={<Deposit />} 
          />
          <Route 
            path="*" 
            element={<NoPage />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}