import { supabase } from "@/lib/supabaseClient";
import TweetList from "@/components/TweetList";

export default async function Home() {
  
  const { data: tweets, error } = await supabase.from("tweets").select();
  
  return (
    <div className="">
      <TweetList tweets={tweets} />
    </div>
  )
}
