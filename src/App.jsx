import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./layouts/AdminLayout";

// Public Pages
import Home from "./pages/PublicPages/Home";
import NewArrival from "./pages/PublicPages/NewArrival";
import UsedCars from "./pages/PublicPages/UsedCars";
import Services from "./pages/PublicPages/Services";
import Reviews from "./pages/PublicPages/Reviews";
import Login from "./pages/PublicPages/Login";
import Register from "./pages/PublicPages/Register";
import AboutUs from "./pages/PublicPages/AboutUs";
import CarNews from "./pages/PublicPages/CarNews";
import ContactUs from "./pages/PublicPages/ContactUs";

// User Pages
import Dashboard from "./pages/UserPages/Dashboard";
import MyOrders from "./pages/UserPages/MyOrders";
import TrackOrder from "./pages/UserPages/TrackOrder";

// Admin Pages
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import ManageCars from "./pages/AdminPages/ManageCars";
import ManageOrders from "./pages/AdminPages/ManageOrders";
import ManageUsers from "./pages/AdminPages/ManageUsers";
import Layout from "./layouts/UserLayout";

const App = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public routes - anyone can access */}
        <Route path="/" element={<Layout><Home /> </Layout>} />
        <Route path="/about" element={ <Layout><AboutUs /></Layout>} />
        <Route path="/contact" element={ <Layout><ContactUs /></Layout>} />
        <Route path="/login" element={  <Layout><Login /></Layout>}/>
        <Route path="/register" element={ <Layout><Register /></Layout>}/>
        <Route path="/newArrivals" element={ <Layout><NewArrival /></Layout>}/>
        <Route path="/usedCars" element={ <Layout><UsedCars /> </Layout>}/>
        <Route path="/services" element={ <Layout><Services /></Layout>}/>
        <Route path="/reviews" element={ <Layout><Reviews /></Layout>}/>
        <Route path="/carnews" element={  <Layout><CarNews /></Layout>}/>

        {/* User routes - PROTECTED - need to be logged in */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myorders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trackOrder"
          element={
            <ProtectedRoute>
              <TrackOrder />
            </ProtectedRoute>
          }
        />

        {/* Admin routes - All wrapped in AdminLayout with sidebar */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          {/* Nested routes - render inside AdminLayout's <Outlet /> */}
          <Route index element={<AdminDashboard />} />
          <Route path="cars" element={<ManageCars />} />
          <Route path="orders" element={<ManageOrders />} />
          <Route path="users" element={<ManageUsers />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
