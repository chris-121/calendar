import React from "react";
import { Outlet } from "react-router-dom";
import DocumentNavigation from "./DocumentNavigation";

const TeacherDocuments = () => {
  return (
    <div>
      <h2 className="text-4xl text-center mt-5">Teacher Dashboard</h2>
      <DocumentNavigation />
      <Outlet />
    </div>
  );
};

export default TeacherDocuments;
