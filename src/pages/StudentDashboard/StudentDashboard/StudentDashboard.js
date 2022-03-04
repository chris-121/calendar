import React, { useState } from 'react'
import Sidebar from '../../../Components/Sidebar'

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div><Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/></div>
  )
}

export default StudentDashboard