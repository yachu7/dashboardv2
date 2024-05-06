import {
  AiOutlineEllipsis,
  AiOutlineCloseCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";
import Calendar from "react-calendar";


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const Middle = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="flex flex-row gap-2 p-2 bg-[#f5f5f5] rounded-tl-2xl rounded-tr-2xl ">
      <div className="flex flex-col w-[63%] h-[40vh] bg-white ml-2 my-2 rounded-2xl">
        <div className="flex flex-row justify-between m-2 ">
          <p>Today Tasks</p>
          <p>See All</p>
        </div>
        <div className="my-2 flex flex-row">
          <div className="flex flex-col w-1/2 bg-[#f5f5f5] ml-2 rounded-3xl ">
            <div className="flex flex-row items-center m-2 justify-between">
              <p className="ml-2">Delivery App Kit</p>
              <div className="p-2 rounded-full bg-white mr-2">
                <AiOutlineEllipsis />
              </div>
            </div>
            <p className="mx-2">
              We got project to make a <br /> delivery ui kit called Foodnow...
            </p>
            <div className="m-2 flex flex-row ">
              <div className="p-1 rounded-full bg-[#f5f5f5]">
                <AiOutlineUser size={18} />
              </div>
              <div className="p-1 rounded-full bg-[#f5f5f5]">
                <AiOutlineUser size={18} />
              </div>
              <div className="p-1 rounded-full bg-[#f5f5f5]">
                <AiOutlineUser size={18} />
              </div>
              <div className="p-1 rounded-full bg-[#f5f5f5]">
                <AiOutlineUser size={18} />
              </div>
              <p>+2</p>
            </div>
            <p className="flex justify-end mx-2">65%</p>
            <div className="rounded-full m-2 ">
              <div className="bg-green-500 p-2 w-[65%] rounded-l-full "></div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 bg-[#f5f5f5] ml-2 rounded-3xl mr-2">
            <div className="flex flex-row items-center m-2 justify-between">
              <p className="ml-2">Dribbble Shot</p>
              <div className="p-2 rounded-full bg-white mr-2">
                <AiOutlineEllipsis />
              </div>
            </div>
            <p className="mx-2">
              Make Dribbble shot with a <br /> project management theme...
            </p>
            <div className="m-2 flex flex-row ">
              <div className="p-1 rounded-full bg-[#f5f5f5]">
                <AiOutlineUser size={18} />
              </div>
              <div className="p-1 rounded-full bg-[#f5f5f5]">
                <AiOutlineUser size={18} />
              </div>
              <div className="p-1 rounded-full bg-[#f5f5f5]">
                <AiOutlineUser size={18} />
              </div>
              <div className="p-1 rounded-full bg-[#f5f5f5]">
                <AiOutlineUser size={18} />
              </div>
              <p>+2</p>
            </div>
            <p className="flex justify-end mx-2">80%</p>
            <div className="rounded-full m-2 ">
              <div className="bg-green-500 p-2 w-[80%] rounded-l-full "></div>
            </div>
          </div>
        </div>
        <div className="mx-2 p-2  text-white bg-neutral-900 rounded-full flex items-center justify-between ">
          <p className="ml-2">You Have Five tasks today.Keep it UP!</p>
          <AiOutlineCloseCircle size={25} className="mr-2 text-gray-200" />
        </div>
      </div>

      <div className="bg-white m-2  w-[35%] rounded-2xl ">
        <Calendar onChange={onChange} value={value} className="m-2" />
      </div>
    </div>
  );
};

export default Middle;
