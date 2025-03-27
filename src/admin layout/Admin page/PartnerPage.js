// AdminPersonalPage.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";

import ProfileForm from "../../ProfileForm/ProfileForm.jsx";
import CreatePost from "../../Posts/PostForm";

import { Navigate } from "react-router-dom";

import DonationManagement from "../Donation Management/DonationManagement.js";
import ProjectForm from "../Project/Project Form/ProjectForm.js";

import PersonalPage from "../Admin page/PersonalPage/PersonalPage.js";

function PartnerPersonalPage() {
  return (
    <div className="container-fluid admin-page  bg-success">
      <div className="row justify-content-center">
        <div className="col-lg-2 col-1 text-white">
          <Sidebar />
        </div>
        <div className="col-lg-10   col-11">
          <Routes>
            <Route path="personal-page" element={<PersonalPage />} />
            <Route path="profile" element={<ProfileForm />} />
            <Route path="create-post" element={<CreatePost />} />

            <Route path="posts/:postId/edit" element={<CreatePost />} />
            <Route path="profile/" element={<ProfileForm />} />

            <Route path="project-form" element={<ProjectForm />} />
            <Route path="projects/edit/:projectId" element={<ProjectForm />} />
            <Route
              path="donation-management"
              element={<DonationManagement />}
            />
            <Route
              path="*"
              element={<Navigate to="/admin/personal-page" replace />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default PartnerPersonalPage;
