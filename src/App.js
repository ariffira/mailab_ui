import Index from "components/Index.js";
import Contact from "components/Contact";
import Profile from "components/Profile.js";
import Project from "components/Project.js";

import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";

import { Route, Routes, Navigate } from "react-router-dom";
import Tutes from "components/Tutes";
import MyCompanies from "components/MyCompanies";

function App() {
    return (
        <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/my_projects" exact element={<Project />} />
            <Route path="/log_in" exact element={<Login />} />
            <Route path="/about_me" exact element={<Profile />} />
            <Route path="/my_tutes" exact element={<Tutes />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/contact_me" exact element={<Contact />} />
            <Route path="/new_project" exact element={<Project />} />
            <Route path="/my_companies" exact element={<MyCompanies />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default App;
