import { useIncrement } from './hooks/useIncrement';

interface InputNumberProps {
  onChange?: (value: number) => void;
}

const InputNumber = ({ onChange }: InputNumberProps) => {
  const { counter, increaseBy } = useIncrement(onChange);

  return (
    <div className="input-number">
      <button
        className="input-number__action input-number__action--left"
        data-testid="decrease"
        onClick={increaseBy(-1)}
      >
        <span>&minus;</span>
      </button>
      <input type="text" className="input-number__display" value={counter} data-testid="display" disabled />
      <button
        className="input-number__action input-number__action--right"
        data-testid="increase"
        onClick={increaseBy(1)}
      >
        <span>&#43;</span>
      </button>
    </div>
  );
};

export default InputNumber;
