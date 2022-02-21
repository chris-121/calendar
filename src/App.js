import "flowbite";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Academic from "./pages/AdminDashboard/Documents/Academic";
import AddDocument from "./pages/AdminDashboard/Documents/AddDocument";
import Adminstration from "./pages/AdminDashboard/Documents/Adminstration";
import Documents from "./pages/AdminDashboard/Documents/Documents";
import Personal from "./pages/AdminDashboard/Documents/Personal";
import ClassStatus from "./pages/AdminDashboard/Library/ClassStatus";
import Completion from "./pages/AdminDashboard/Library/Completion";
import CreateContent from "./pages/AdminDashboard/Library/CreateContent";
import StudentProfile from "./pages/AdminDashboard/Library/StudentProfile";
import TeacherProfile from "./pages/AdminDashboard/Library/TeacherProfile";
import Library from "./pages/StudentDashboard/Library/Library";
import LibrarySubject from "./pages/StudentDashboard/Library/LibrarySubject";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen((t) => !t);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Documents />} />
        <Route
          path="/studentLibrary"
          element={<Library menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        />
        <Route
          path="/librarySubject"
          element={
            <LibrarySubject menuOpen={menuOpen} toggleMenu={toggleMenu} />
          }
        />
        <Route
          path="/completion"
          element={<Completion menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        />
        <Route
          path="/classStatus"
          element={<ClassStatus menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        />
        <Route
          path="/teacherStatus"
          element={
            <StudentProfile menuOpen={menuOpen} toggleMenu={toggleMenu} />
          }
        />
        <Route path="/teacherProfile" element={<TeacherProfile />} />
        <Route path="/createContent" element={<CreateContent />} />

        <Route path="/documents" element={<Documents />}>
          <Route path="/documents" element={<Academic />} />
          <Route path="/documents/personal" element={<Personal />} />
          <Route path="/documents/adminstration" element={<Adminstration />} />
          <Route path="/documents/addDocument" element={<AddDocument />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
