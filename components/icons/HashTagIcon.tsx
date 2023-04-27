import { IconProps } from "@/utils/PropInterfaces";

interface Props extends IconProps {
  stroke?: string;
}

const HashTagIcon = ({ color, fill, className, stroke }: Props) => {
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
          d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
        />
      </svg>
    </span>
  );
};

export default HashTagIcon;
