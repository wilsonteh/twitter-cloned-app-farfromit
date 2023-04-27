import { IconProps } from "@/utils/PropInterfaces";

const ArrowLeftIcon = ({ color, fill, className, stroke }: IconProps) => {
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
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </span>
  );
};

export default ArrowLeftIcon;
