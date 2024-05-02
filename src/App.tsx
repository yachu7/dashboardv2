import "./App.css";
import Bottom from "./components/Bottom";
import Dashboard from "./components/Dashboard";
import Middle from "./components/Middle";
import Top from "./components/Top";

function App() {
  return (
    <div className=" flex flex-row">
      <Dashboard />

      <div className="flex flex-col w-full pl-[17%]">
        <Top />
        <Middle />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
