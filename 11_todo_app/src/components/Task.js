import React from "react";
import clock from "../assets/clock.png";
import bin from "../assets/bin.png";
import correct from "../assets/correct.png";

const Task = () => {
  let taskDate;
  function dateTime() {
    taskDate = new Date();
    console.log(taskDate.toLocaleDateString());
    console.log(taskDate.toLocaleTimeString());
  }
  dateTime();
  return (
    <>
      <div className="relative px-4 pb-2 rounded-md bg-slate-500 my-2 flex items-center justify-between hover:bg-slate-600">
        <div>
          <p className="top-[2px] left-[10%] mb-1 text-gray-300">
            <img src={clock} className="w-4 inline-block mr-1" alt="" />
            Date & Time
          </p>
          <h3 className="text-2xl font-semibold">Task 1</h3>
          <p className="text-gray-300">Description</p>
        </div>
        <div className="icons flex gap-x-1 lg:gap-3 lg:pr-[20px]">
          <img
            title="delete task"
            className="w-10 rounded-full hover:p-[2px] hover:text-white cursor-pointer"
            src={bin}
            alt=""
          />
          <img
            title="mark task completed"
            className="w-10 rounded-full hover:p-[2px] hover:text-white cursor-pointer"
            src={correct}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Task;
