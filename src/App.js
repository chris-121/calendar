import "flowbite";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ClassStatus from "./pages/AdminDashboard/Library/ClassStatus";
import Completion from "./pages/AdminDashboard/Library/Completion";
import Home from "./pages/Home";
import Library from "./pages/StudentDashboard/Library/Library";
import LibrarySubject from "./pages/StudentDashboard/Library/LibrarySubject";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen((t) => !t);
  };
  return (
    <Router>
      <div>
        <Link
          className="bg-yellow-500 py-1 px-2 rounded-lg my-4 mx-2 inline-block"
          to="/"
        >
          Home
        </Link>
        <Link
          className="bg-yellow-500 py-1 px-2 rounded-lg my-4 mx-2 inline-block"
          to="/studentLibrary"
        >
          Student Library
        </Link>
        <Link
          className="bg-yellow-500 py-1 px-2 rounded-lg my-4 mx-2 inline-block"
          to="/completion"
        >
          Completion
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
    </Router>
  );
}

export default App;
