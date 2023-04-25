"use client";
import { usePathname } from "next/navigation";
import LoginPanel from "./LoginPanel";

const RightSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="">
      {/* if user not logged in, show <LoginPanel />  */}
      {/* if user logged in, show trending hashtags or stg else (yet to decide)  */}
      <LoginPanel />  
      
    </div>
  );
}
 
export default RightSideBar;