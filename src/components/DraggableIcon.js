// @flow

import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import { useDrag, useDrop } from 'react-dnd';

import DraggableItems from 'components/DraggableItems';
import Icon from 'components/Icon';
import type { IconItem } from 'types/IconItem';
import { css, makeStyles, type Styles } from 'utils/styles';

const useStyles = makeStyles({
  '@keyframes icon-shaking': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '20%': {
      transform: 'rotate(-3deg)',
    },
    '25%': {
      transform: 'rotate(0deg)',
    },
    '75%': {
      transform: 'rotate(3deg)',
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
  +iconItem: IconItem,
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
  const { id, name, iconSrc, url } = iconItem;
  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableItems.ICON, id, index },
    collect: monitor => ({
      isDragging: monitor.getItem() && iconItem && iconItem.id === monitor.getItem().id,
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
    <Box component="a" href={url}>
      <Box
        onContextMenu={handleRightClick}
        className={css(isDragging && styles.dragging)}
        ref={node => drag(drop(node))}
      >
        <Icon name={name} src={iconSrc} />
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
