"use client";
import Image from "next/image";
import Button from "./ui/Button";

const NewTweetForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit form");
  }

  return (
    <form className="flex gap-x-4 items-start p-2 border-[1px] border-t-0 border-slate-200"
      onSubmit={handleSubmit}>

      <Image 
        className="rounded-full"
        src={"https://pbs.twimg.com/profile_images/1619612859314634753/gN6uJIH5_400x400.jpg"}
        alt=""
        width={48}
        height={48}
        />
      
      <div className="w-full flex flex-col gap-y-3 items-end">
        <textarea 
          className="w-full placeholder-slate-500/80 rounded-lg border border-gray-200 min-h-[50px]
            bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-sky-300 focus:ring-opacity-40" 
          placeholder="What's happening?" 
          rows={2}
          /> 

        <Button text="Tweet" className="px-4 py-1" />
      </div>
    </form>
  );
}
 
export default NewTweetForm;