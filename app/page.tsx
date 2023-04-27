import TweetList from "@/components/TweetList";
import NewTweetForm from "@/components/NewTweetForm";
import { getAllRecords } from "@/lib/supabase/Utils";
import { createServerClient } from "@/lib/supabase/supabase-server";

export const revalidate = 0; // no cache 

export default async function Home({}) {

  const supabase = createServerClient();
  const { data: { session }, error: err } = await supabase.auth.getSession()
  const { data: tweets, error } = await getAllRecords("tweets");

  return (
    <div className="">
      { session ? <NewTweetForm /> : null }
      <TweetList tweets={tweets} />
    </div>
  )
}
