import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import DetailPage from "./pages/Detail";
import NotFoundPage from "./pages/404";

const AppRoutes = ({user}) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes;