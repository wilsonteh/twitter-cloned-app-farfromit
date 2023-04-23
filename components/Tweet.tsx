import Image from "next/image";
import TweetActionsBar from "./ui/TweetActionsBar";

const Tweet = (tweet: any) => {

  return (
    <div className="flex gap-x-4 items-start p-2 border-[1px] border-t-0 border-slate-200">
      <div className="">
        <Image 
          className="rounded-full"
          src={"https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"} 
          alt="pic" 
          width={48}
          height={48}
          />
      </div>

      <div className="flex flex-col w-full">
        <div className="text-sm">
          <span className="font-semibold">Marcus Rashford</span>
          <span className="text-slate-500"> @{tweet.author} </span>
        </div>

        <div className="text-sm">
          { tweet.text }
        </div>

        <div className="mt-2">
          <TweetActionsBar />
        </div>
      </div>

    </div>
  );
}
 
export default Tweet;