import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Library from "./Components/StudentDash/Library";
import LibrarySubject from "./Components/StudentDash/LibrarySubject";
import TeacherAssignment from "./Components/TeacherDash/TeacherAssignment";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/library' element={<Library />}></Route>
        <Route path='/librarySubject' element={<LibrarySubject />}></Route>
        <Route
          path='/TeacherAssignment'
          element={<TeacherAssignment />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
