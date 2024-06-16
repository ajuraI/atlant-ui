import React from 'react';
import { ButtonDesign } from './constants.ts';
import { getButtonClassName } from './utils';
import './Button.styles.scss';

type Props = {
  label: string;
  design?: ButtonDesign;
  fullWidth?: boolean;
  className?: string;
  onClick?: VoidFunction;
};

const Button: React.FC<Props> = (props) => {
  const { onClick, label, design = ButtonDesign.Success, fullWidth, className } = props;

  const buttonClassName = getButtonClassName(design, fullWidth, className);

  return <button onClick={onClick} className={buttonClassName}>{label}</button>;
};

export default Button;
