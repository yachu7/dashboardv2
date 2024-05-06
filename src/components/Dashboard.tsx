import {
  AiOutlineUp,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineSchedule,
  AiOutlineTeam,
  AiOutlineCalendar,
} from "react-icons/ai";
const Dashboard = () => {
  const menu = [
    {
      name: "DashBoard",
      icon: <AiOutlineHome />,
    },
    {
      name: "Messages",
      icon: <AiOutlineMail />,
    },
    {
      name: "My Tasks",
      icon: <AiOutlineSchedule />,
    },
    {
      name: "Friends",
      icon: <AiOutlineTeam />,
    },
    {
      name: "Calendar",
      icon: <AiOutlineCalendar />,
    },
  ];
  return (
    <div className="flex flex-col  gap-2 ml-2 w-[16%] fixed h-screen">
      <p className="text-2xl font-bold py-2">TaskMaster.</p>

      <p className="text-3xl py-4 font-semibold">
        Start Your Day
        <br />& Be Productive
      </p>

      <div className="">
        <div className="flex justify-between font-semibold">
          Menu
          <AiOutlineUp />
        </div>
        <ul className="m-2">
          {menu.map((items) => (
            <li className="p-2 pl-2 flex items-center gap-2 rounded-full  hover:bg-neutral-800 hover:text-white">
              <span className="ml-2">{items.icon}</span> <p>{items.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
