import React from "react";
import Header from "./Header";
import Pages from "../mainPages/pages";
const SchoolAdmin = ()=>{
    return (
        <>
          <div className=" flex items-center flex-col justify-center my-5 ">
              <div className="  px-20 border-2 py-10 my-10   border-gray-400">
                <h2 className=" text-center text-3xl font-bold">School Admin Dashboard</h2>
                 <Header/>
                 <div>
                    <Pages/>
                 </div>
              </div>
          </div>
        </>
    )
}

export default SchoolAdmin;