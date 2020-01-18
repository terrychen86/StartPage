// @flow

import { makeStyles } from '@material-ui/core/styles';
import type { Styles } from 'types/Styles';
import classnames from 'classnames';

export const css = (...args: Array<any>): string => {
  const styles: Array<string> = args.filter(n => typeof n === 'string');
  return classnames([...styles]);
};

export type { Styles };
export { makeStyles };
