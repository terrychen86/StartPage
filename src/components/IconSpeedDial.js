// @flow

import * as React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Build from '@material-ui/icons/Build';
import { MODALS, MODAL_ACTIONS, type ModalAction } from 'actions/ModalActions';

import { makeStyles, type Styles } from 'utils/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 5000,
  },
  speedDial: {
    '& > button.MuiFab-root': {
      background: 'none',
      border: 'none',
      boxShadow: 'none',
      opacity: '0.25',
      transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) !important',
    },

    '&:hover > button.MuiFab-root': {
      background: 'none',
      boxShadow: 'none',
      opacity: '1',
    },
  },
});

type Option = {|
  +icon: React.Node,
  +name: string,
|};

const options: Array<Option> = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' },
];

const IconSpeedDial = (): React.Node => {
  const styles: Styles = useStyles();
  const [shouldOpenSpeedDial, setShouldOpenSpeedDial] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const openAddIconModal = React.useCallback((): void => {
    const action: ModalAction = { type: MODAL_ACTIONS.OPEN_MODAL, modal: MODALS.ADD_ICON };
    dispatch(action);
  }, [dispatch]);

  const handleOpen = () => {
    setShouldOpenSpeedDial(true);
  };

  const handleClose = () => {
    setShouldOpenSpeedDial(false);
  };

  return (
    <Box className={styles.root}>
      <SpeedDial
        ariaLabel="SpeedDial"
        className={styles.speedDial}
        icon={<Build />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={shouldOpenSpeedDial}
      >
        {options.map(action => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={openAddIconModal} />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default IconSpeedDial;
