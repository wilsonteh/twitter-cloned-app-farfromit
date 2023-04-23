import TweetList from "@/components/TweetList";
import NewTweetForm from "@/components/NewTweetForm";
import { getAllRecords } from "@/lib/supabase/Utils";

export const revalidate = 0; // no cache, fetch 

export default async function Home() {
  
  const { data: tweets, error } = await getAllRecords("tweets");

  return (
    <div className="w-[500px] mx-auto">
      <NewTweetForm />
      <TweetList tweets={tweets} />
    </div>
  )
}
