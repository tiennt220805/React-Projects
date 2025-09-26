import NavBar from "./components/NavBar";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";

function App() {
  return (
    <div className="mx-auto max-w-[360px]">
      <NavBar />
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
          <CiSearch className="absolute ml-0.5 text-2xl text-white" />
          <input
            className="h-8 flex-grow rounded-lg border border-white bg-transparent pl-8 text-white"
            type="text"
          />
        </div>
        <FaCirclePlus className="cursor-pointer text-3xl text-white" />
      </div>
    </div>
  );
}

export default App;
