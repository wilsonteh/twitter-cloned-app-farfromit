import { IconProps } from "@/utils/PropInterfaces";

interface Props extends IconProps {
  stroke?: string;
}

const BellIcon = ({ color, fill, className, stroke }: Props) => {
  return (
    <span className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        color={color || ""}
        fill={fill || "none"}
        viewBox="0 0 24 24"
        strokeWidth={stroke || "1.5"}
        stroke="currentColor"
        className={className || "w-4 h-4"}
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
    </span>
  );
};

export default BellIcon;
