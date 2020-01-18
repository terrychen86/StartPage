// @flow

import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useDrag, useDrop } from 'react-dnd';

import DraggableItems from 'components/DraggableItems';
import type { IconItemType } from 'types/IconItemType';
import * as colors from 'utils/colors';
import spaces from 'utils/spaces';
import { css, makeStyles, type Styles } from 'utils/styles';

const useStyles = makeStyles({
  '@keyframes icon-shaking': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '20%': {
      transform: 'rotate(-5deg)',
    },
    '25%': {
      transform: 'rotate(0deg)',
    },
    '75%': {
      transform: 'rotate(5deg)',
    },
    '100%': {
      transform: 'rotate(0deg)',
    },
  },
  dragging: {
    opacity: 0.75,
    animation: '$icon-shaking 400ms 0ms infinite',
  },
});

type Props = {|
  +index: number,
  +iconItem: IconItemType,
  +onIconHover: (id: string, targetId: string) => void,
|};

type MouseState = {|
  +mouseX: ?number,
  +mouseY: ?number,
|};

const DraggableIcon = ({ index, iconItem, onIconHover }: Props): React.Node => {
  const [mouseState, setMouseState] = React.useState<MouseState>({
    mouseX: null,
    mouseY: null,
  });

  const styles: Styles = useStyles();
  const { id, name } = iconItem;
  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableItems.ICON, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: DraggableItems.ICON,
    hover({ id: targetId }) {
      if (targetId !== id) {
        onIconHover(id, targetId);
      }
    },
  });

  const handleRightClick = (event): void => {
    event.preventDefault();
    setMouseState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleContextMenuClose = (): void => {
    setMouseState({ mouseX: null, mouseY: null });
  };

  return (
    <Box component="a" href={iconItem.iconUrl}>
      <Box
        onContextMenu={handleRightClick}
        className={css(isDragging && styles.dragging)}
        ref={node => drag(drop(node))}
      >
        <Box
          mx="auto"
          my="0"
          width="80px"
          height="80px"
          bgcolor={colors.white}
          borderRadius="20px"
          boxShadow="4px 4px 16px 8px rgba(0,0,0,0.1)"
        >
          <Box p={spaces.sm}>
            <Box component="img" width="100%" src={iconItem.iconUrl} alt={name} />
          </Box>
        </Box>
        <Box my={spaces.xs} px={spaces.sm} py={spaces.tiny} borderRadius="8px" bgcolor="rgba(0, 0, 0, 0.5)">
          <Typography align="center" variant="button">
            {name}
          </Typography>
        </Box>

        <Menu
          keepMounted
          open={mouseState.mouseY !== null}
          onClose={handleContextMenuClose}
          anchorReference="anchorPosition"
          anchorPosition={
            mouseState.mouseY !== null && mouseState.mouseX !== null
              ? { top: mouseState.mouseY, left: mouseState.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={handleContextMenuClose}>Open in new tab</MenuItem>
          <MenuItem onClick={handleContextMenuClose}>Edit</MenuItem>
          <MenuItem onClick={handleContextMenuClose}>Delete</MenuItem>
          <MenuItem onClick={handleContextMenuClose}>Cancel</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
export default DraggableIcon;
