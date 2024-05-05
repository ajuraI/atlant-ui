import React from 'react';
import { getLinkClassName } from './utils';
import './styles.scss';

type Props = {
  text: string;
  to: string;
  className?: string;
  fullWidth?: boolean;
};

const Link: React.FC<Props> = ({ to, text, className, fullWidth }) => {
  const linkClassName = getLinkClassName(className, fullWidth);

  return (
    <div className={linkClassName}>
      <a className='link' href={to}>
        {text}
      </a>
    </div>
  );
};

export default Link;
