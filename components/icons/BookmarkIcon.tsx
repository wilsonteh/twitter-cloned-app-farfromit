import { IconProps } from "@/utils/PropInterfaces";

interface Props extends IconProps {
  stroke?: string;
}

const BookmarkIcon = ({ color, fill, className, stroke }: Props) => {
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
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </svg>
    </span>
  );
};

export default BookmarkIcon;
