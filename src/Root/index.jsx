import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "../pages/HomePage";
import AdminLayout from "../pages/AdminLayout";
import NotFound from "../pages/NotFound";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default Root;
