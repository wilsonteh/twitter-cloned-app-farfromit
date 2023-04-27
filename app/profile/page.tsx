import Profile from "@/components/Profile";

export const revalidate = 0; // no cache 

export default async function ProfilePage() {

  return (
    <div className="">
      <Profile />
    </div>

  )
}
