"use client";
import { useSupabase } from "@/supabase-provider";
import { PrimaryButton } from "./ui/Buttons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPanel = () => {
  const { supabase, session } = useSupabase();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <section className="w-[300px] flex flex-col gap-y-2 p-4 border border-slate-200 rounded-lg">
      <div className="">
        <h1 className="text-xl font-bold">
          New to Twitter?
        </h1>      
        <p className="text-slate-500 text-xs">
          Sign up now to get your own personalized timeline!
        </p>
      </div>
      
      <div className="flex flex-col gap-y-3">

        { session ? (
          <div className="">
            <span>
              { session.user.email }
            </span>
            <PrimaryButton 
              text="Sign out" 
              inverse
              className="w-full"
              onClick={handleSignOut}
              />
          </div>
        ) : (
          <>
            <Link href="/login" className="">
              <PrimaryButton 
                text="Login" 
                className="w-full"
                />
            </Link>

            <Link href="/register" className="">
              <PrimaryButton 
                text="Create account" 
                inverse
                className="w-full"
                />
            </Link>
          </>
        )}

      </div>
    </section>
  );
}
 
export default LoginPanel;