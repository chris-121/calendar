import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from "../StudentSidebar";
const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div><StudentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    
    <Outlet/></div>
  )
}

export default StudentDashboard