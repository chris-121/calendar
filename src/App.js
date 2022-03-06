import "flowbite";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard/AdminDashboard";
import Academic from "./pages/AdminDashboard/Documents/Academic";
import AddDocument from "./pages/AdminDashboard/Documents/AddDocument";
import AdminDocuments from "./pages/AdminDashboard/Documents/AdminDocuments";
import Adminstration from "./pages/AdminDashboard/Documents/Adminstration";
import Personal from "./pages/AdminDashboard/Documents/Personal";
import ClassStatus from "./pages/AdminDashboard/Library/ClassStatus";
import Completion from "./pages/AdminDashboard/Library/Completion";
import CreateContent from "./pages/AdminDashboard/Library/CreateContent";
import CompletedAssessment from "./pages/StudentDashboard/Assessment/CompleteAssesment";
import StudentAssessment from "./pages/StudentDashboard/Assessment/StudentAssessment";
import StudentAcademic from "./pages/StudentDashboard/Documents/StudentAcademic";
import StudentAdminstration from "./pages/StudentDashboard/Documents/StudentAdminstration";
import StudentDocuments from "./pages/StudentDashboard/Documents/StudentDocuments";
import StudentPersonal from "./pages/StudentDashboard/Documents/StudentPersonal";
import Library from "./pages/StudentDashboard/Library/Library";
import LibrarySubject from "./pages/StudentDashboard/Library/LibrarySubject";
import StudentCalendar from "./pages/StudentDashboard/studentCalendar/StudentCalendar";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard/StudentDashboard";
import StudentFee from "./pages/StudentDashboard/StudentFee/StudentFee";
import StudentProfile from "./pages/StudentDashboard/StudentProfile/StudentProfile";
import StudentAssesReport from "./pages/StudentDashboard/StudentReports/StudentAssesReport";
import TeacherAssessment from "./pages/TeacherDashboard/Assessment/TeacherAssessment";
import TeacherCompleteAssesment from "./pages/TeacherDashboard/Assessment/TeacherCompleteAssesment";
import TeacherUploadAsses from "./pages/TeacherDashboard/Assessment/TeacherUploadAsses";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard/TeacherDashboard";
import TeacherAcademic from "./pages/TeacherDashboard/TeacherDocuments/TeacherAcademic";
import TeacherAdminstration from "./pages/TeacherDashboard/TeacherDocuments/TeacherAdminstration";
import TeacherDocuments from "./pages/TeacherDashboard/TeacherDocuments/TeacherDocuments";
import TeacherPersonal from "./pages/TeacherDashboard/TeacherDocuments/TeacherPersonal";
import TeacherProfile from "./pages/TeacherDashboard/TeacherProfile/TeacherProfile";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen((t) => !t);
  };
  return (
    <Router>
      <Navbar/>
      <Routes>
      

        {/* home route */}
        <Route path="/" element={<TeacherUploadAsses />} />

        {/* student routes */}
        <Route path="/studentDashboard" element={<StudentDashboard/>}>
        <Route
          path="/studentDashboard"
          element={<StudentProfile/>}
        />
        <Route
          path="/studentDashboard/studentProfile"
          element={<StudentProfile/>}
        />
        <Route
          path="/studentDashboard/studentLibrary"
          element={<Library/>}
        />
        <Route
          path="/studentDashboard/studentAssessment"
          element={<StudentAssessment />}
        />
        <Route
          path="/studentDashboard/studentCompletedAssessment"
          element={<CompletedAssessment />}
        />
        <Route
          path="/studentDashboard/studentCalender"
          element={<StudentCalendar />}
        />
        <Route
          path="/studentDashboard/studentAccessReport"
          element={<StudentAssesReport />}
        />
        <Route
          path="/studentDashboard/studentFee"
          element={<StudentFee />}
        />
        <Route
          path="/studentDashboard/studentDocuments"
          element={<StudentDocuments />}
        >
        <Route path="/studentDashboard/studentDocuments/academic" element={<StudentAcademic />} />
          <Route
            path="/studentDashboard/studentDocuments/personal"
            element={<StudentPersonal />}
          />
          <Route
            path="/studentDashboard/studentDocuments/adminstration"
            element={<StudentAdminstration />}
          />
          </Route>
        </Route>

        {/* teacher routes */}
        <Route path="/teacherDashboard" element={<TeacherDashboard/>}>
        <Route path='/teacherDashboard/teacherProfile' element={<TeacherProfile/>}/>
        <Route path='/teacherDashboard/teacherAssessment' element={<TeacherAssessment/>} />
           
          <Route path="/teacherDashboard/teacherAssessment/teacherCompleteAssessment"
            element={<TeacherCompleteAssesment/>}/>

          <Route path="/teacherDashboard/teacherAssessment/teacherCreateAssessment"
            element={<TeacherUploadAsses/>}/>
            
          <Route path="/teacherDashboard/teacherDocuments"
            element={<TeacherDocuments/>}>
                <Route path="/teacherDashboard/teacherDocuments/academic" element={<TeacherAcademic/>}/>
                <Route path="/teacherDashboard/teacherDocuments/personal" element={<TeacherPersonal/>}/>
                <Route path="/teacherDashboard/teacherDocuments/adminstration" element={<TeacherAdminstration/>}/>
              </Route>
        </Route>

        {/* admin routes */}
          <Route path="/adminDashboard" element={<AdminDashboard/>}>
            
          </Route>


        {/* other routes */}

        
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

        <Route path="/adminDocuments" element={<AdminDocuments />}>
          <Route path="/adminDocuments" element={<Academic />} />
          <Route path="/adminDocuments/personal" element={<Personal />} />
          <Route
            path="/adminDocuments/adminstration"
            element={<Adminstration />}
          />
          <Route path="/adminDocuments/addDocument" element={<AddDocument />} />
        </Route>

        

        {/* teacher document routes */}
        <Route path="/teacherDocuments" element={<TeacherDocuments />}>
          <Route path="/teacherDocuments" element={<TeacherAcademic />} />
          <Route
            path="/teacherDocuments/personal"
            element={<TeacherPersonal />}
          />
          <Route
            path="/teacherDocuments/adminstration"
            element={<TeacherAdminstration />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
