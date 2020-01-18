// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';

import { makeStyles, type Styles } from 'utils/styles';
import spaces from 'utils/spaces';
import * as colors from 'utils/colors';

const useStyles = makeStyles({
  indicatorWrapper: {
    width: '25px',
    height: '40px',
    marginLeft: spaces.xxs,
    marginRight: spaces.xxs,
    background: 'none',
    cursor: 'pointer',
    outline: 'none',
  },
  indicator: {
    transition: 'all 200ms ease-in-out',
  },
});

type Props = {|
  +num: number,
  +onClick: number => void,
|};

const Indicators = (props: Props): React.Node => {
  const styles: Styles = useStyles();
  const { num, onClick } = props;
  const [indicatorIdx, setIndicatorIdx] = React.useState<number>(0);

  const handleIndicatorClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { dataset } = e.currentTarget;
    const { id } = dataset;
    setIndicatorIdx(+id);
    onClick(+id);
  };

  return (
    <Box>
      {[...Array(num)].map((_n, i) => (
        <button
          key={`${i + 1}`}
          className={styles.indicatorWrapper}
          type="button"
          data-id={`${i}`}
          onClick={handleIndicatorClick}
        >
          <Box
            className={styles.indicator}
            height="4px"
            flex="1 1 100%"
            borderRadius="4px"
            bgcolor={i === indicatorIdx ? colors.white : 'rgba(255, 255, 255, 0.25)'}
          />
        </button>
      ))}
    </Box>
  );
};

export default Indicators;
