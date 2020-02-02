// @flow

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';
import { useDrop } from 'react-dnd';
import DraggableIcon from 'components/DraggableIcon';
import Indicators from 'components/Indicators';
import DraggableItems from 'components/DraggableItems';
import { makeStyles, type Styles } from 'utils/styles';
import spaces from 'utils/spaces';
import { updateIconItems } from 'actions/IconItemActions';
import type { IconItem } from 'types/IconItem';
import type { Dispatch } from 'types/Redux';

const useStyles = makeStyles({
  transition: {
    transition: 'all 500ms ease-in',
  },
});

type IconItemArray = Array<IconItem>;

const DroppablePanel = (): React.Node => {
  const styles: Styles = useStyles();
  const dispatch: Dispatch = useDispatch();
  const { iconItems: iconItemsInReduxStore } = useSelector(state => state.iconItems);

  const [iconItems, setIconItems] = React.useState<Array<IconItem>>(iconItemsInReduxStore);
  const [panelIdx, setPanelIdx] = React.useState<number>(0);
  const [canTriggerPageChange, setCanTriggerPageChange] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIconItems(iconItemsInReduxStore);
  }, [iconItemsInReduxStore]);

  const iconGroups: Array<IconItemArray> = iconItems.reduce((acc, cur) => {
    if (acc.length === 0 || acc[acc.length - 1].length >= 15) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, []);

  const [, drop] = useDrop({ accept: DraggableItems.ICON });
  const [, nextPageRef] = useDrop({
    accept: DraggableItems.ICON,
    hover: (): void => {
      if (canTriggerPageChange && panelIdx !== iconGroups.length - 1) {
        setPanelIdx(panelIdx + 1);
        setCanTriggerPageChange(false);
        setTimeout(() => {
          setCanTriggerPageChange(true);
        }, 1000);
      }
    },
  });

  const [, prevPageRef] = useDrop({
    accept: DraggableItems.ICON,
    hover: (): void => {
      if (canTriggerPageChange && panelIdx !== 0) {
        setPanelIdx(panelIdx - 1);
        setCanTriggerPageChange(false);
        setTimeout(() => {
          setCanTriggerPageChange(true);
        }, 1000);
      }
    },
  });

  const dispatchUpdateIconItems = React.useCallback(
    (icons: Array<IconItem>) => {
      dispatch(updateIconItems(icons));
    },
    [dispatch],
  );

  const onIconHover = (hoveredIconId: string, draggedIconId: string): void => {
    const draggedIcon: ?IconItem = iconItems.find(n => n.id === draggedIconId);
    if (!draggedIcon) return;

    const hoveredIcon: ?IconItem = iconItems.find(n => n.id === hoveredIconId);
    if (!hoveredIcon) return;

    const hoveredIconIndex: number = iconItems.indexOf(hoveredIcon);
    const newIconItems: IconItemArray = iconItems.filter(n => n.id !== draggedIconId);
    newIconItems.splice(hoveredIconIndex, 0, draggedIcon);

    const didIconItemsChange: boolean = iconItems.some((icon, i) => icon.id !== newIconItems[i].id);
    if (didIconItemsChange) {
      setIconItems(newIconItems);
    }
  };

  const onIconDrop = (): void => {
    dispatchUpdateIconItems(iconItems);
  };

  const onIndicatorClick = (i: number): void => {
    setPanelIdx(i);
  };

  const getPanelHeight = (n: number): string => {
    if (n <= 5) return '33%';
    if (n <= 10) return '66%';
    return '100%';
  };

  const getIconHeight = (n: number): string => {
    if (n <= 5) return '100%';
    if (n <= 10) return '50%';
    return '33%';
  };

  return (
    <Box ref={drop} height="100%" position="relative">
      <Box ref={prevPageRef} position="absolute" top="0" bottom="0" left="-60px" width="30px" zIndex={3} />
      <Box ref={nextPageRef} position="absolute" top="0" bottom="0" right="-60px" width="30px" zIndex={3} />
      <Box position="absolute" left="0" right="0" bottom="-50px" display="flex" justifyContent="center">
        <Indicators activeIndex={panelIdx} num={iconGroups.length} onClick={onIndicatorClick} />
      </Box>
      <Box overflow="hidden" width="100%" height="100%" display="flex">
        {iconGroups.map((iconGroup, index) => (
          <Box key={`${index + 1}`} height="100%" width="100%" flex="1 0 100%">
            <Box
              display="flex"
              width="100%"
              flexWrap="wrap"
              flex="1 1 100%"
              height={getPanelHeight(iconGroup.length)}
              style={{ transform: `translateX(${panelIdx * -100}%)` }}
              className={styles.transition}
            >
              {iconGroup.map((item, i) => (
                <Box
                  key={item.id}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flex="0 1 20%"
                  width="20%"
                  height={getIconHeight(iconGroup.length)}
                  color={grey[50]}
                  spaces={spaces.sm}
                >
                  <DraggableIcon index={i} iconItem={item} onIconHover={onIconHover} onIconDrop={onIconDrop} />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DroppablePanel;
