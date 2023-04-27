import { IconProps } from "@/utils/PropInterfaces";

interface Props extends IconProps {
  stroke?: string;
}

const UserIcon = ({ color, fill, className, stroke }: Props) => {
  return (
    <span className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        color={color || ""}
        fill={fill || "none"}
        viewBox="0 0 24 24"
        stroke-width={stroke || "1.5"}
        stroke="currentColor"
        className={className || "w-4 h-4"}
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </span>
  );
};

export default UserIcon;
