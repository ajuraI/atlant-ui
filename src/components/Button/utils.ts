import { ButtonDesign } from './constants.ts';
import buildClass from '../../utils/buildClass.ts';

export const getButtonClassName = (design: ButtonDesign, fullWidth?: boolean, className?: string) =>
  buildClass('button', design, className, fullWidth ? 'fullWidth' : '');
