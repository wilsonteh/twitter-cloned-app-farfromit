import TweetList from "@/components/TweetList";
import NewTweetForm from "@/components/NewTweetForm";
import { getAllRecords } from "@/lib/supabase/Utils";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import { createServerClient } from "@/lib/supabase/supabase-server";

export const revalidate = 0; // no cache 

export default async function Home() {

  const supabase = createServerClient();
  // const { data: { user } } = await supabase.auth.getUser();
  const { data: tweets, error } = await getAllRecords("tweets");

  

  return (
    <div className="flex gap-x-8 justify-center items-start">
      <LeftSideBar />
      <div className="w-[500px]">
        <NewTweetForm />
        <TweetList tweets={tweets} />
      </div>
      <RightSideBar />
    </div>

  )
}
