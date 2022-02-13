import React from "react";
import LibraryFilter from "../../../Components/LibraryFilter";
import src from "../../../images/chart.png";
import Button from "../../../YIEUI/Button";

const ClassStatus = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-5">
        <LibraryFilter classes="bg-gray-300 p-5 pr-10" />
        <div className="border border-black col-span-2 ">
          <p className="-mt-3 w-max bg-white px-1 mx-2 ">Class</p>
          <div className="grid grid-cols-3 p-5 gap-5">
            <div>
              <img className="h-auto w-full" src={src} alt="" />
            </div>
            <div className="col-span-2 border border-black p-5">
              <p>Completion of Material = 50%</p>
              <p>Class Average = 65%</p>
              <p>Teacher: Lorem Ipsum</p>
              <p className="inline-block mr-10">Teacher Content profile</p>
              <Button classes="inline-block" variant="filter">
                Go
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassStatus;
