import { Route, Routes } from "react-router-dom";
import AccountPage from "../../Page/AccountPage";
import AboutPage from "../Information/AboutPage";
import ErrorPage from "../Information/ErrorPage";
import HomePage from "../Information/HomePage";


export const route = (
    <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/home" element={<HomePage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/AccountManagement" element={<AccountPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
);