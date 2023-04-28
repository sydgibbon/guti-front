import { ReactNode } from "react";
import SideBar from "./sidebar/Sidebar";
import Navbar from "./Navbar";

interface PropsMain {
  children?: ReactNode;
}
const Main = ({ children }: PropsMain) => {
   
  return (
    <div className="flex main">
      <SideBar />
      <div className="flex flex-col w-full h-screen overflow-y-auto">
        <Navbar />
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Main;
