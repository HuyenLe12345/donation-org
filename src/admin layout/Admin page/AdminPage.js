// AdminPersonalPage.js
import React from "react";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "../Dashboard/Dashboard.js";
import ProfileForm from "../../ProfileForm/ProfileForm.jsx";
import CreatePost from "../../Posts/PostForm";
import CreateAdminAccount from "../Create Account/CreateAdminAccount.js";
import CreatePartnerAccount from "../Create Account/CreatePartnerAccount.js";
import { Navigate } from "react-router-dom";
import ProjectForm from "../Project/Project Form/ProjectForm.js";
import ClientManagement from "../Manage Users/ClientManagement.js";
import SeniorManagement from "../Manage Users/ SeniorManagement.js";
import PersonalPage from "../Admin page/PersonalPage/PersonalPage.js";
import DonationManagement from "../Donation Management/DonationManagement.js";

function AdminPersonalPage() {
  return (
    <div className="container-fluid admin-page  bg-success">
      <div className="row justify-content-center">
        <div className="col-lg-2 col-1 text-white">
          <Sidebar />
        </div>
        <div className="col-lg-10   col-11">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="personal-page" element={<PersonalPage />} />
            <Route path="profile/" element={<ProfileForm />} />
            <Route path="posts/:postId/edit" element={<CreatePost />} />
            <Route path="profile" element={<ProfileForm />} />

            <Route path="project-form" element={<ProjectForm />} />
            <Route path="projects/edit/:projectId" element={<ProjectForm />} />
            <Route path="user-management/:userId" element={<ProfileForm />} />

            <Route
              path="user-management/client"
              element={<ClientManagement />}
            />
            <Route
              path="user-management/senior"
              element={<SeniorManagement />}
            />
            <Route
              path="create-account/admin"
              element={<CreateAdminAccount />}
            />

            <Route
              path="create-account/partner"
              element={<CreatePartnerAccount />}
            />
            <Route
              path="donation-management"
              element={<DonationManagement />}
            />
            <Route
              path="*"
              element={<Navigate to="/admin/dashboard" replace />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminPersonalPage;
