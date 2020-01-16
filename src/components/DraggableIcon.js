// @flow

import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { useDrag, useDrop } from 'react-dnd';

import DraggableItems from './DraggableItems';
import type { IconItemType } from '../types/IconItemType';
import * as colors from '../utils/colors';
import spaces from '../utils/spaces';
import styles from './DraggableIcon.module.scss';

type Props = {|
  +index: number,
  +iconItem: IconItemType,
  +onIconDrag: (id: string, targetId: string) => void,
|};

type MouseState = {|
  +mouseX: ?number,
  +mouseY: ?number,
|};

const DraggableIcon = ({ index, iconItem, onIconDrag }: Props): React.Node => {
  const [mouseState, setMouseState] = React.useState<MouseState>({
    mouseX: null,
    mouseY: null,
  });
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
        onIconDrag(id, targetId);
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
      <Box onContextMenu={handleRightClick} className={isDragging && styles.dragging} ref={node => drag(drop(node))}>
        <Box mx="auto" my="0" width="80px" height="80px" bgcolor={colors.white} borderRadius="20px">
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
          <MenuItem onClick={handleContextMenuClose}>Edit</MenuItem>
          <MenuItem onClick={handleContextMenuClose}>Delete</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
export default DraggableIcon;
