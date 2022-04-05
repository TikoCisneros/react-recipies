import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

interface InputProps {
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute | 'textarea';
  block?: boolean;
}

const Input = ({ value, onChange, placeholder, type = 'text', block = false }: InputProps) => {
  const classes = `${
    block ? 'w-full' : 'w-auto max-w-[320px]'
  } p-3 text-gray-900 border border-gray-300 rounded-md focus:border-gray-600`;

  return (
    <div className="flex flex-col my-2">
      {type !== 'textarea' ? (
        <input className={classes} placeholder={placeholder} type={type} value={value} onChange={onChange} />
      ) : (
        <textarea className={`${classes} h-16`} placeholder={placeholder} value={value} onChange={onChange}></textarea>
      )}
    </div>
  );
};

export default Input;
