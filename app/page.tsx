import { supabase } from "@/lib/supabaseClient";
import TweetList from "@/components/TweetList";
import NewTweetForm from "@/components/NewTweetForm";

export default async function Home() {
  
  const { data: tweets, error } = await supabase.from("tweets").select();
  
  return (
    <div className="w-[500px] mx-auto">
      <NewTweetForm />
      <TweetList tweets={tweets} />
    </div>
  )
}
