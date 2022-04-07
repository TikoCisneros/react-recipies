import { MouseEventHandler } from 'react';

type ButtonColors = 'primary' | 'secondary';

interface ButtonProps {
  label: string;
  color?: ButtonColors;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  block?: boolean;
}

const Button = ({ label, color = 'primary', onClick, block }: ButtonProps) => {
  return (
    <button className={`btn btn--${color} ${block && 'btn--block'}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
