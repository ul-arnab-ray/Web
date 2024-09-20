// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import DashboardHome from "./mainDashboard/dashboardHome";
import ServiceDashboardHome from "./serviceProviderDashboard/serviceDashboardHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardHome />} />
          <Route path="service" element={<ServiceDashboardHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
