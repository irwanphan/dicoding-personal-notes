import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
    )
}

export default AppRoutes;