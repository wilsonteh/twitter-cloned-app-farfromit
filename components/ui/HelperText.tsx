
interface Props {
  type: "error" | "success";
  text: string;
  classNames?: string;
}

const ErrorText = ({ type, text, classNames }: Props) => {
  let styles = "";

  if (type === "error") {
    styles += "bg-red-100 text-red-600";
  
  } else if (type === "success") {
    styles += "bg-green-100 text-green-600";
  }

 
  return (
    <span className={`${styles} ${classNames} text-xs rounded-lg px-2 py-[1px]`}>
      {text}
    </span>
  );
}
 
export default ErrorText;