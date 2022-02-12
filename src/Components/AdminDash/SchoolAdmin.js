import React from "react";
import { Link, Outlet } from "react-router-dom";

const SchoolAdmin = () => {
  return (
    <div className='flex h-screen'>
      <div className='navContainer border-2 border-black h-[90vh] py-6 min-w-[200px]'>
        <ul className='Nav flex flex-col justify-between  ml-5 mt-2 min-h-full'>
          <li className='my-1'>
            <a
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              href='#'>
              User Profile
            </a>
          </li>
          <li className='my-1'>
            <a
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              href='#'>
              Attendance
            </a>
          </li>
          <li className='my-1'>
            <a
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              href='#'>
              Library
            </a>
          </li>
          <li className='my-1'>
            <Link
              to='/SchoolAdmin/SchoolAdminAssessment/StudentsAssessment'
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
              Assessments
            </Link>
          </li>
          <li className='my-1'>
            <a
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              href='#'>
              Live Classes
            </a>
          </li>
          <li className='my-1'>
            <a
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              href='#'>
              Discussion Forum
            </a>
          </li>
          <li className='my-1'>
            <a
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              href='#'>
              Calender
            </a>
          </li>
          <li className='my-1'>
            <a
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              href='#'>
              Fee Collection
            </a>
          </li>
          <li className='my-1'>
            <a
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              href='#'>
              Documents{" "}
            </a>
          </li>
          <li className='my-1'>
            <a
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              href='#'>
              Notices
            </a>
          </li>
        </ul>
      </div>
      <div className='flex flex-col items-center w-[100%]'>
        <p className='font-extrabold text-2xl'>SCHOOL ADMIN DASHBOARD</p>
        <div className='main_content_page m-5 '>
          <Outlet />
        </div>
      </div>
      <Link
        to='/'
        className='py-2.5 px-5 mr-2 mb-2 text-sm absolute right-1 top-1 font-medium max-h-10 max-w-[80px] text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-500 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-400'
        href='#'>
        Home
      </Link>
    </div>
  );
};

export default SchoolAdmin;
