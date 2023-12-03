import React from "react";
import clock from "../assets/clock.png";
import bin from "../assets/bin.png";
import correct from "../assets/correct.png";

const Task = ({ todoData }) => {
  const { title, description, dateTime } = todoData;
  return (
    <>
      <div className="relative px-4 pb-2 rounded-md bg-slate-500 my-2 flex items-center justify-between hover:bg-slate-600">
        <div className="w-[80%]">
          <p className="top-[2px] left-[10%] mb-1 text-gray-300">
            <img src={clock} className="w-4 inline-block mr-1" alt="" />
            {dateTime?.todoDate} : {dateTime?.todoTime}
          </p>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-300">{description}</p>
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
