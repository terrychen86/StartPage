// @flow

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useDrag, useDrop } from 'react-dnd';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';

import DraggableItems from 'components/DraggableItems';
import Icon from 'components/Icon';
import { openModal, MODALS } from 'actions/ModalActions';
import { updateIconItems, setEditIconId } from 'actions/IconItemActions';
import { css, makeStyles, type Styles } from 'utils/styles';
import type { Dispatch, ReduxState } from 'types/Redux';
import type { IconItem } from 'types/IconItem';

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
  +onIconHover: (currentIconId: string, draggedIconId: string) => void,
  +onIconDrop: () => void,
|};

type MouseState = {|
  +mouseX: ?number,
  +mouseY: ?number,
|};

const DraggableIcon = ({ index, iconItem, onIconHover, onIconDrop }: Props): React.Node => {
  const styles: Styles = useStyles();
  const dispatch = useDispatch<Dispatch>();
  const { enqueueSnackbar } = useSnackbar();
  const { iconItems } = useSelector<ReduxState, $ElementType<ReduxState, 'iconItems'>>(state => state.iconItems);
  const [mouseState, setMouseState] = React.useState<MouseState>({
    mouseX: null,
    mouseY: null,
  });

  const { id, name, iconSrc, url } = iconItem;
  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableItems.ICON, id, index },
    collect: monitor => ({
      isDragging: monitor.getItem() && iconItem && iconItem.id === monitor.getItem().id,
    }),
  });

  const [, drop] = useDrop({
    accept: DraggableItems.ICON,
    hover({ id: draggedIconId }) {
      if (draggedIconId !== id) {
        onIconHover(id, draggedIconId);
      }
    },
    drop() {
      onIconDrop();
    },
  });

  const handleRightClick = (event: SyntheticMouseEvent<HTMLElement>): void => {
    event.preventDefault();
    setMouseState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleContextMenuClose = (): void => {
    setMouseState({ mouseX: null, mouseY: null });
  };

  const handleEditIcon = React.useCallback((): void => {
    handleContextMenuClose();
    dispatch(setEditIconId(id));
    dispatch(openModal(MODALS.EDIT_ICON));
  }, [dispatch, id]);

  const handleDeleteIcon = React.useCallback((): void => {
    handleContextMenuClose();
    const newIconItems: Array<IconItem> = iconItems.filter(n => n.id !== id);
    dispatch(updateIconItems(newIconItems)).then(() => {
      enqueueSnackbar('Icon deleted', { variant: 'info' });
    });
  }, [dispatch, enqueueSnackbar, iconItems, id]);

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
          <MenuItem onClick={handleEditIcon}>Edit</MenuItem>
          <MenuItem onClick={handleDeleteIcon}>Delete</MenuItem>
          <MenuItem onClick={handleContextMenuClose}>Cancel</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
export default DraggableIcon;
