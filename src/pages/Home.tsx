import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className='flex flex-col h-[100vh]'>
      Home Page
      <Link to='/testimonial'>testimonial</Link>
      <Link
        to='/library'
        className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-center  text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 max-w-[160px]'>
        Library
      </Link>
      <Link
        to='/TeacherAssignment'
        className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 max-w-[160px]'>
        TeacherAssignment
      </Link>
      <div className='navigation flex flex-col'>
        <Link
          to='/SchoolAdmin'
          className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 max-w-[160px]'>
          Admin Login
        </Link>
        <Link
          to='/Teacher'
          className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 max-w-[160px]'>
          Teacher Login
        </Link>
        <Link
          to='/Student'
          className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 max-w-[160px]'>
          Student Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
