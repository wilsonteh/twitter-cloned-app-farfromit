"use client";
import Image from "next/image";
import Button from "./ui/Button";
import { insertRecord } from "@/lib/supabase/Utils";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorText from "./ui/HelperText";

interface Tweet {
  text: string;
  author: string;
}

const NewTweetForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, resetField } = useForm<Tweet>();

  const handleTweetSubmit: SubmitHandler<Tweet> = async (formData) => {
    // ? setting default author for now as auth is not implemented
    const tweet = {...formData, author: "author"}   
    const { data, error } = await insertRecord("tweets", tweet);
    resetField("text")
    router.refresh();
  }

  return (
    <form 
      className="flex gap-x-4 items-start p-2 border-[1px] border-t-0 border-slate-200"
      onSubmit={handleSubmit(handleTweetSubmit)} 
      >
      <Image 
        className="rounded-full"
        src={"https://pbs.twimg.com/profile_images/1619612859314634753/gN6uJIH5_400x400.jpg"}
        alt=""
        width={48}
        height={48}
        />
      <div className="w-full flex flex-col">
        <textarea 
          className="w-full placeholder-slate-500/80 rounded-lg border border-gray-200 min-h-[50px]
          bg-white px-3 py-2 mb-2 text-sm text-gray-700 
          focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-sky-300 
          focus:ring-opacity-40" 
          rows={2}
          placeholder="What's happening?" 
          {...register("text", { 
            required: "This field is required", 
            maxLength: {
              value: 300, 
              message: "Tweet cannot be longer than 300 characters"
            }
          })}
          /> 
        
        <div className={`flex ${errors.text ? 'justify-between' : 'justify-end'} items-center`}>
          { errors.text && 
            <ErrorText 
              type="error" 
              text={errors.text.message!} 
              classNames="self-start"
              /> }

          <Button 
            text="Tweet" 
            className="px-4 py-1 self-end" 
            />
        </div>
        
      </div>
    </form>
  );
}
 
export default NewTweetForm;