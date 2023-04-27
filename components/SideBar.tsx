"use client";
import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import TwitterIcon from "./icons/TwitterIcon";
import UserIcon from "./icons/UserIcon";
import HashTagIcon from "./icons/HashTagIcon";
import BellIcon from "./icons/BellIcon";
import BookmarkIcon from "./icons/BookmarkIcon";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SideBar = () => {

  const iconClassName = "w-[24px] h-[24px]";
  const sidebarItems = [
    {
      name: "home",
      icon: <HomeIcon className={iconClassName} />, 
      iconActive: <HomeIcon className={iconClassName} fill="black" stroke="2.5" />, 
      href: "/",
    }, 
    {
      name: "explore",
      icon: <HashTagIcon className={iconClassName} />,
      iconActive: <HashTagIcon className={iconClassName} fill="black" stroke="2.5" />, 
      href: "/explore",
    },
    {
      name: "notifications",
      icon: <BellIcon className={iconClassName} />,
      iconActive: <BellIcon className={iconClassName} fill="black" stroke="2.5" />, 
      href: "/notifications",
    }, 
    {
      name: "bookmarks",
      icon: <BookmarkIcon className={iconClassName} />,
      iconActive: <BookmarkIcon className={iconClassName} fill="black" stroke="2.5" />, 
      href: "/bookmarks",
    }, 
    {
      name: "profile",
      icon: <UserIcon className={iconClassName} />,
      iconActive: <UserIcon className={iconClassName} fill="black" stroke="2.5" />, 
      href: "/profile",
    },
  ];
  const pathname = usePathname();
  
  return (
    <section className="w-[200px] flex flex-col gap-y-2 items-start py-4">
      <Link href={"/"} className="p-2 rounded-full tranition-colors duration-[200ms] transform hover:bg-gray-200">
        <TwitterIcon className="w-[28px] h-[28px]" />
      </Link>

      <div className="flex flex-col gap-y-2 w-full">
        { sidebarItems.map((item, i) => (
          <Link key={i} href={item.href} className="rounded-full w-fit" >
            <div className={`flex gap-x-3 items-center rounded-full pl-2 pr-4 py-2 
              ${pathname === item.href ? "bg-slate-100" : ""} hover:bg-gray-200`}
              >
              <span> { (pathname === item.href) ? item.iconActive : item.icon } </span>
              <span className={`capitalize text-lg font-semibold`}> 
                { item.name } 
              </span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
 
export default SideBar;