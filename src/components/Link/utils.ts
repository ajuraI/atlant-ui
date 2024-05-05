import buildClass from '../../utils/buildClass.ts';

export const getLinkClassName = (className?: string, fullWidth?: boolean): string =>
  buildClass('link-wrapper', fullWidth ? 'fullWidthLink' : '', className ?? '');
