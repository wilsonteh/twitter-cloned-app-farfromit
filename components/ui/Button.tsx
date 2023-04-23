import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string;
}

const Button = ({ text, className }: Props) => {

  const baseStyles = `bg-sky-500 text-white px-6 py-2 rounded-full tracking-wide capitalize font-medium 
  transition-colors duration-300 transform hover:bg-sky-600 focus:outline-none focus:ring-2`;

  const classNames = twMerge(baseStyles, className);

  return (
    <button className={classNames}>
      { text }
    </button>
  );
}
 
export default Button;