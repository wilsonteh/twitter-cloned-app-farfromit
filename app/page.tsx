import { supabase } from "@/lib/supabaseClient";


export default async function Home() {
  const { data } = await supabase.from('test').select()
  console.log(data);
  
  return (
    <div className="">
      { data[0].text }
    </div>
  )
}
