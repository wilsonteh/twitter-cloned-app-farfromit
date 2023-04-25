"use client";
import { PrimaryButton } from "./ui/Buttons";
import Link from "next/link";

const LoginPanel = () => {

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
        <Link href="/login" className="">
          <PrimaryButton 
            text="Login" 
            />
        </Link>

        <Link href="/register" className="">
          <PrimaryButton 
            text="Create account" 
            inverse
            />
        </Link>
      </div>

    </section>
  );
}
 
export default LoginPanel;