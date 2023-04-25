import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  text: string;
  inverse?: boolean
  onClick?: () => void;
}

const baseStyles = `
  focus:outline-none focus:ring-2 px-6 py-2 rounded-full tracking-wide capitalize font-medium 
  transition-colors duration-300 transform
`;

export const PrimaryButton = ({ className, text, inverse, onClick }: Props) => {
  const styles = `
    ring-sky-300
    ${inverse ? 
      'bg-white text-sky-500 border-sky-500 border hover:bg-sky-100 ' : 
      'bg-sky-500 text-white hover:bg-sky-600'} 
  `;
  const classNames = twMerge(baseStyles, styles, className);

  return (
    <button className={classNames} onClick={onClick}>
      { text }
    </button>
  );
}

export const SecondaryButton = ({ className, text, inverse, onClick }: Props) => {
  const styles = `
    focus:ring-slate-300
    ${inverse ? 
      'bg-white text-slate-900 border-slate-400 border hover:bg-slate-100 ' : 
      'bg-slate-900 text-white hover:bg-slate-700'}

  `;
  const classNames = twMerge(baseStyles, styles, className);

  return (
    <button className={classNames} onClick={onClick}>
      { text }
    </button>
  );
}

 