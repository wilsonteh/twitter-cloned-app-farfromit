"use client";
import Link from "next/link";
import { SecondaryButton } from "../ui/Buttons";
import { useSupabase } from "@/supabase-provider";
import { useForm, SubmitHandler } from "react-hook-form";
import HelperText from "../ui/HelperText";
import EyeIcon from "../icons/EyeIcon";
import { useState } from "react";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const { supabase } = useSupabase();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>(); 
  // console.log("🚀 form errors:", errors)
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const email = register("email", {
    required: "Email cannot be left empty",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      message: "Email address is invalid"
    }, 
  })
  const password = register("password", {
    required: "Password cannot be left empty",
    validate: {
      length: (password) => password.length >= 8 || "Password should be at least 8 characters long",
      uppercase: (password) => /[A-Z]/.test(password) || "Password should contain at least 1 uppercase letter",
      number: (password) => /\d/.test(password) || "Password should contain at least 1 number",
      symbol: (password) => /\W/.test(password) || "Password should contain at least 1 symbol",
    }
  })
  const confirmPassword = register("confirmPassword", {
    required: "Confirm password cannot be left empty",
    validate: {
      validateNumber: (confirmPassword, data) => confirmPassword === data.password || "Passwords do not match", 
    }
  })

  const handleSignUp: SubmitHandler<RegisterFormData> = async (formData) => {
    console.log("😆 signed up!", formData);
    const { data, error } = await supabase.auth.signUp({
      email: formData.email, 
      password: formData.password,
      // options: {
      //   emailRedirectTo: "http://localhost:3000/login",
      // }
    })
  }

  return (
    <form 
      className="w-[400px] mx-auto mt-4 rounded-lg border border-slate-200 p-4 flex flex-col gap-y-4 
        text-sm" 
      onSubmit={handleSubmit(handleSignUp)} >
      <h1 className="text-lg font-semibold text-center">
        Create your account
      </h1>

      <div className="flex flex-col gap-y-4 select-none">
        <div className="flex flex-col gap-y-1">
          <input 
            type="text" 
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  
            focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
            placeholder="Email" 
            onChange={email.onChange} onBlur={email.onBlur} name={email.name} ref={email.ref}
            />

          { errors.email && 
          <HelperText
            type="error" 
            text={errors.email.message!} 
            classNames=""
            /> }
        </div>
        
        <div className="flex flex-col gap-y-1">
          <div className="relative flex items-center mt-2">
            <input 
              type={`${showPassword ? "text" : "password"}`}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  
              focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
              placeholder="Password" 
              onChange={password.onChange} onBlur={password.onBlur} name={password.name} ref={password.ref}
              />

            <span 
              className="absolute right-3 cursor-pointer p-1 rounded-full hover:bg-slate-100" 
              onClick={() => setShowPassword(!showPassword)}
              >
              <EyeIcon show={showPassword} />
            </span>
          </div>

        { errors.password && 
          <HelperText
            type="error" 
            text={errors.password.message!} 
            classNames=""
            /> }
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="relative flex items-center mt-2">
            <input 
              type={`${showConfirmPassword ? "text" : "password"}`}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  
              focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
              placeholder="Confirm Password" 
              onChange={confirmPassword.onChange} onBlur={confirmPassword.onBlur} name={confirmPassword.name} ref={confirmPassword.ref}
              />

            <span 
              className="absolute right-3 cursor-pointer p-1 rounded-full hover:bg-slate-100" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
              <EyeIcon show={showConfirmPassword} />
            </span>
          </div>
          
        { errors.confirmPassword && 
          <HelperText
            type="error" 
            text={errors.confirmPassword.message!} 
            classNames=""
            /> }
        </div>
      </div>

      <SecondaryButton text="Sign up" />

      <div className="flex gap-x-2 justify-center">
        <span className="text-slate-500">Have an account?</span>
        <Link href="/login" className="font-semibold text-sky-500">
          Login
        </Link>
      </div>
      
    </form>
  );
};

export default RegisterForm;
