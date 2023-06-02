import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "../pages/HomePage";
import AdminLayout from "../pages/AdminLayout";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default Root;
