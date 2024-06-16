import React from 'react';
import './Container.styles.scss';
import buildClass from '../../utils/buildClass.ts';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  const containerClassName = buildClass('container', className);

  return <section className={containerClassName}>{children}</section>;
};

export default Container;
