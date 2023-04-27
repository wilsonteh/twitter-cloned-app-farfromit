import { IconProps } from "@/utils/PropInterfaces";

interface Props extends IconProps {
  stroke?: string;
}

const HomeIcon = ({ color, fill, className, stroke }: Props) => {
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
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    </span>
  );
};

export default HomeIcon;