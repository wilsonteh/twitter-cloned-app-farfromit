"use client";
import Link from "next/link";
import { SecondaryButton } from "../ui/Buttons";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSupabase } from "@/supabase-provider";
import { useRouter } from "next/navigation";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { supabase } = useSupabase();
  const { register, handleSubmit, formState: { errors }, resetField } = useForm<LoginFormData>(); 
  const router = useRouter();

  const email = register("email", {
    required: "Email cannot be left empty",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      message: "Email address is invalid"
    }, 
  })
  const password = register("password", {
    required: "Password cannot be left empty",
  })

  const handleLogin: SubmitHandler<LoginFormData> = async (formData) => {
    console.log("😆 logged in!", formData);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email, 
      password: formData.password,
    })
    router.push("/");
  }

  return (
    <form 
      className="w-[400px] mx-auto mt-4 rounded-lg border border-slate-200 p-4 flex flex-col gap-y-4 text-sm"
      onSubmit={handleSubmit(handleLogin)} > 
      <h1 className="text-lg font-semibold text-center">
        Login to your account
      </h1>

      <div className="flex flex-col gap-y-4">
        <input 
          type="text" 
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  
          focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
          placeholder="Email" 
          onChange={email.onChange} onBlur={email.onBlur} name={email.name} ref={email.ref}
          />
        <input 
          type="password" 
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  
          focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
          placeholder="Password" 
          onChange={password.onChange} onBlur={password.onBlur} name={password.name} ref={password.ref}
          />
      </div>

      <SecondaryButton text="Login" />

      <div className="flex gap-x-2 justify-center">
        <span className="text-slate-500">Don&lsquo;t have an account?</span>
        <Link href="/register" className="font-semibold text-sky-500">
          Register
        </Link>
      </div>
      
    </form>
  );
};

export default LoginForm;
