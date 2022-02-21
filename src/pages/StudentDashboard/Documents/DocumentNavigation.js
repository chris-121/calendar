import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../YIEUI/Button";

const DocumentNavigation = () => {
  const navigate = useNavigate();
  return (
    <div class="flex pt-5  mx-auto w-3/4 justify-center mb-5" role="group">
      <Button
        variant="navigation"
        onClick={() => navigate("/studentDocuments")}
      >
        Academic
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/studentDocuments/personal")}
      >
        Personal
      </Button>
      <Button
        variant="navigation"
        onClick={() => navigate("/studentDocuments/adminstration")}
      >
        Adminstration
      </Button>
    </div>
  );
};

export default DocumentNavigation;
