import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../YIEUI/Button";

const DocumentNavigation = () => {
  const navigate = useNavigate();
  return (
    <div class="flex pt-5  mx-auto w-3/4 justify-center" role="group">
      <Button variant="navigation" onClick={() => navigate("/documents")}>
        Academic
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/documents/personal")}
      >
        Personal
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/documents/adminstration")}
      >
        Adminstration
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/documents/addDocument")}
      >
        Add Document
      </Button>
    </div>
  );
};

export default DocumentNavigation;
