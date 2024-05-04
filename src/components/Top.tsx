import {
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineBell,
  AiOutlineUser,
} from "react-icons/ai";
import { MdTune, MdOutlineWbSunny } from "react-icons/md";

const Top = () => {
  return (
    <div className="p-4 flex items-center">
      <div className="pl-4  p-4 bg-[#f5f5f5] rounded-l-full text-gray-500">
        <AiOutlineSearch />
      </div>
      <input
        type="text"
        placeholder="Start Searching Here..."
        className="p-3 w-[60%] bg-[#f5f5f5] border-none outline-none"></input>
      <div className="p-4 bg-[#f5f5f5] rounded-r-full pr-4 text-gray-500">
        <MdTune />
      </div>
      <div className="p-4 bg-[#f5f5f5] rounded-full ml-2 hover:brightness-95">
        <MdOutlineWbSunny size={18} />
      </div>
      <div className="p-4 bg-[#f5f5f5] rounded-full ml-2 hover:brightness-95">
        <AiOutlineBell size={18} />
      </div>
      <div className="p-4 bg-[#f5f5f5] rounded-full ml-2 hover:brightness-95">
        <AiOutlineSetting size={18} />
      </div>

      <div className="p-4 bg-[#f5f5f5] rounded-full ml-2 ring-2 ring-green-500">
        <AiOutlineUser size={18} />
      </div>
      <div className="flex flex-col ml-2">
        <p className="font-semibold">Yachu Maharjan</p>
        <p className="text-gray-500">Frontend-Developer</p>
      </div>
    </div>
  );
};

export default Top;
