"use client";
  import Link from "next/link";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import Image from "next/image";
import { SecondaryButton } from "./ui/Buttons";
import TweetList from "./TweetList";

const Profile = () => {

  return (
    <div className="border-x border-slate-200">
      <div className="px-3 py-1 flex items-center gap-x-4">
        <Link href="#" className="p-2 rounded-full hover:bg-gray-200">
          <ArrowLeftIcon className="w-[16px] h-[16px]" color="black" stroke="2" />
        </Link>

        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-wide"> Atticus </span>
          <span className="text-xs text-slate-500"> 231 Tweets </span>
        </div>
      </div>

      <Image 
        src="https://pbs.twimg.com/profile_banners/1284482473309569024/1677718305/1500x500"
        alt="image"
        width={1500}
        height={500}
        className=""
      />

      <div className="px-3 py-2">
        <div className="flex justify-end items-start relative h-[90px]">
          <Image 
            src="https://pbs.twimg.com/profile_images/1619612859314634753/gN6uJIH5_400x400.jpg"
            alt="image"
            width={130}
            height={130}
            className="rounded-full border-[4px] border-white absolute top-[-55%] left-0"
          />

          <SecondaryButton 
            text="Edit profile" 
            inverse
            className="normal-case px-3 py-1 text-sm font-semibold"
            />
        </div>

        <div className="">
          <h1 className="text-lg font-bold tracking-wide leading-none">Atticus</h1>
          <span className="text-slate-600 text-sm"> @atticus </span>
        </div>

        <div className="flex gap-x-4 text-sm">
          <div>
            <span className="font-semibold"> 104 </span>
            <span className="text-slate-500"> Following </span>
          </div>

          <div>
            <span className="font-semibold"> 20 </span>
            <span className="text-slate-500"> Followers </span>
          </div>
        </div>
        
        {/* Author's <TweetList /> */}

      </div>

    </div>
  );
}
 
export default Profile;