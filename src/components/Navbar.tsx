import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="py-4 flex items-center justify-between ">
      <p className="font-bold text-xl ml-2">TaskMaster.</p>
      <div className="flex gap-2">
        <AiOutlineSearch  size={25} />

        <div className="mr-2" onClick={handleNav}>
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
