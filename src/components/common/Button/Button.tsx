import { MouseEventHandler } from 'react';

type ButtonColors = 'primary' | 'secondary';

interface ButtonProps {
  label: string;
  color?: ButtonColors;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  block?: boolean;
}

const Button = ({ label, color = 'primary', onClick, block }: ButtonProps) => {
  let classes = "focus:outline-none focus:ring-4 font-medium rounded-lg text-md px-6 py-3 m-2 ";

  if (color === 'primary') {
    classes = classes.concat("text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300");
  } else {
    classes = classes.concat("text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200");
  }

  if (block) {
    classes = classes.concat(" w-full");
  }

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
