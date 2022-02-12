import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Library from "./Components/StudentDash/Library";
import LibrarySubject from "./Components/StudentDash/LibrarySubject";
import TeacherAssignment from "./Components/TeacherDash/TeacherAssignment";
import Testimonial from "./Components/Testimonial/Testimonial";
import SchoolAdmin from "./Components/AdminDash/SchoolAdmin";
import AdminAssessment from "../src/Components/AdminDash/AdminAssessment";
import StudentAssessment from "./Components/AdminDash/StudentAssessment";
import TeacherAssessment from "./Components/AdminDash/TeacherAssessment";
import CompletedAssessment from "./Components/AdminDash/CompletedAssessments";
import Editmarks from "./Components/AdminDash/Editmarks";
import CreateAssessment from "./Components/AdminDash/CreatreAssessment";
import CompletedAssessmentsHome from "./Components/AdminDash/CompletedAssessmentsHome";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='' element={<Home />} />
        <Route path='/library' element={<Library />} />
        <Route path='/librarySubject' element={<LibrarySubject />} />
        <Route path='/TeacherAssignment' element={<TeacherAssignment />} />

        {/* Admin Routes ---------------------------------------- */}

        <Route path='SchoolAdmin' element={<SchoolAdmin />}>
          <Route path='SchoolAdminAssessment' element={<AdminAssessment />}>
            <Route path='StudentsAssessment' element={<StudentAssessment />} />
            <Route path='TeacherAssessment' element={<TeacherAssessment />} />
          </Route>
          <Route path='CreateAssessment' element={<CreateAssessment />} />
          <Route
            path='CompletedAssessmentsHome'
            element={<CompletedAssessmentsHome />}
          />
          <Route
            path='CompletedAssessments'
            element={<CompletedAssessment />}
          />
          <Route path='EditMarks' element={<Editmarks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
