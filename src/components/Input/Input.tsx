import React from 'react';
import './Input.styles.scss';

type Props = {
  label?: string;
  placeholder?: string;
  className?: string;
};

const Input: React.FC<Props> = (props) => {
  const { label, placeholder, className } = props;

  return (
    <div className={className}>
      {label && <label htmlFor='input'>{label}</label>}
      <input className='input' id='input' placeholder={placeholder} />
    </div>
  );
};

export default Input;
