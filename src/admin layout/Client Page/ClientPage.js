import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Admin page/Sidebar.js";
import ProfileForm from "../../ProfileForm/ProfileForm.jsx";
import CreatePost from "../../Posts/PostForm.js";
import PersonalPage from "../Admin page/PersonalPage/PersonalPage.js";

function ClientPage() {
  return (
    <div className="container-fluid admin-page  bg-success">
      <div className="row">
        <div className="col-md-2 pe-0 text-white">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Routes>
            <Route path="personal-page" element={<PersonalPage />} />
            <Route path="profile" element={<ProfileForm />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="posts/:postId/edit" element={<CreatePost />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
