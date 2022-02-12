import React, { useState } from "react";
import SelectInput from "../../../Components/SelectInput";
import Sidebar from "../../../Components/Sidebar";
import Button from "../../../YIEUI/Button";
import AggregateCompletion from "./AggregateCompletion";

const Completion = ({ menuOpen }) => {
  const [school, setSchool] = useState("");
  console.log(school);
  const classes = [
    { value: "Select Class" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
  ];

  const subjects = [
    { value: "Select Subject" },
    { value: "Math" },
    { value: "Science" },
    { value: "English" },
    { value: "Hindi" },
  ];

  const sections = [
    { value: "Select Section" },
    { value: "Section A" },
    { value: "Section B" },
    { value: "Section C" },
  ];

  const aggData = [
    {
      filter: "Class 12",
      subject: "Physics",
      completion: "50%",
      aggCompletion: "50%",
    },
  ];

  return (
    <div className="flex">
      <Sidebar classes="md:hidden" menuOpen={menuOpen} />

      <div className="md:w-3/4 w-2/3 p-4">
        <div className=" grid grid-cols-2 gap-4 ">
          {/* select class / subject */}
          <div className=" bg-gray-300 p-2 rounded-md pr-10">
            <SelectInput
              onChange={(e) => console.log(e.target.value)}
              values={classes}
              label="Library"
            />

            <p className="py-3">And/Or</p>
            <SelectInput values={subjects} />

            <Button classes="mt-6 mb-2" variant="secondary">
              Go
            </Button>
          </div>
          {/* content completion */}
          <div className="border border-black rounded-md pl-4 pb-4">
            <p className="-mt-3 bg-white px-3 w-max">Content Completion</p>
            <div className="w-3/4">
              <SelectInput values={classes} />
              <SelectInput values={sections} />
              <SelectInput values={subjects} />
            </div>
            <Button classes="mt-4" variant="filter">
              Apply Filter
            </Button>
          </div>

          {/*  aggregate completion  */}
          <AggregateCompletion data={aggData} classes="col-span-2 " />
        </div>

        {/*  overall completion */}
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default Completion;
