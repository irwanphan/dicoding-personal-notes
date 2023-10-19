import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import NotFoundPage from "./pages/404";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes;