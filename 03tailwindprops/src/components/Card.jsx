import { React } from "react";

function Card() {
  return (
    <div className="relative h-[400px] w-[300px] rounded-xl m-5">
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTns80-dk2AhHXd6Bf8qMSLd95OCmUBG8-YUOPWTR8hnJ9JLn1z38o6jArCngJqMLyY3yk&usqp=CAU'
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">!! Shree Shyma - Radha Ju !!</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
          </button>
        </div>
      </div>
  )
}

export default Card;