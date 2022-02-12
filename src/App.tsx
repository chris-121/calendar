import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Library from "./pages/StudentDashboard/Library/Library";
import LibrarySubject from "./pages/StudentDashboard/Library/LibrarySubject";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/studentLibrary" element={<Library />} />
        <Route path="/librarySubject" element={<LibrarySubject />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
