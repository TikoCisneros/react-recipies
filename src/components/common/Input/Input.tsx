import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

interface InputProps {
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute | 'textarea';
  block?: boolean;
}

const Input = ({ value, onChange, placeholder, type = 'text', block = false }: InputProps) => {
  const classes = `input__elem input__elem--${block ? 'block' : 'normal'}`;

  return (
    <div className="input">
      {type !== 'textarea' ? (
        <input className={classes} placeholder={placeholder} type={type} value={value} onChange={onChange} />
      ) : (
        <textarea className={`${classes} h-16`} placeholder={placeholder} value={value} onChange={onChange}></textarea>
      )}
    </div>
  );
};

export default Input;
