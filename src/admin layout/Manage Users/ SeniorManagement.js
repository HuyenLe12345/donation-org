import React from "react";
import UserManagement from "./UserManagement";
import { Container } from "react-bootstrap";

const SeniorManagement = () => {
  const pagination = {
    page: "1",
    count: "10",
    searchStatus: "active",
    searchContent: "",
    searchTypeOfSenior: "partner",
  };
  const options = [
    { value: "admin", label: "Admin" },
    { value: "partner", label: "Đối tác" },
  ];
  return (
    <Container className="pc-container bg-white rounded p-4">
      <h4 className="title-dashboard">Quản lý cấp cao</h4>

      <UserManagement
        options={options}
        type="senior"
        paginationOnSeniorPage={pagination}
      />
    </Container>
  );
};

export default SeniorManagement;
