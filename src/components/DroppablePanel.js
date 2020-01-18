// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';
import { useDrop } from 'react-dnd';

import DraggableIcon from 'components/DraggableIcon';
import type { IconItemType } from 'types/IconItemType';
import DraggableItems from 'components/DraggableItems';

import { makeStyles, type Styles } from 'utils/styles';
import fetchIcon from 'utils/fetchIcon';
import spaces from 'utils/spaces';

const useStyles = makeStyles({
  transition: {
    transition: 'all 500ms ease-in',
  },
});

type IconItemArrayType = Array<IconItemType>;

// TODO: move to data layer
const ICON_ITEMS: IconItemArrayType = [
  {
    id: '1',
    name: 'Amazon',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '2',
    name: 'Gmail',
    url: '',
    iconUrl: fetchIcon('apple'),
  },
  {
    id: '3',
    name: 'Youtube',
    url: '',
    iconUrl: fetchIcon('bing'),
  },
  {
    id: '4',
    name: 'Facebook',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '5',
    name: 'LinkedIn',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '6',
    name: 'Instagram',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '7',
    name: 'Github',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '8',
    name: 'Amazon',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '9',
    name: 'Medium',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '10',
    name: 'Google Doc',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '16',
    name: 'Google Doc',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '11',
    name: 'Google Doc',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '12',
    name: 'Google Doc',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '13',
    name: 'Google Doc',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '14',
    name: 'Google Doc',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
  {
    id: '15',
    name: 'Google Doc',
    url: '',
    iconUrl: fetchIcon('amazon'),
  },
];

const DroppablePanel = (): React.Node => {
  const styles: Styles = useStyles();
  const [iconItems, setIconItems] = React.useState<IconItemArrayType>(ICON_ITEMS);
  const [panelIdx, setPanelIdx] = React.useState<number>(0);
  const [canTriggerPageChange, setCanTriggerPageChange] = React.useState<boolean>(true);
  const iconSet: Array<IconItemArrayType> = iconItems.reduce((aggr, cur) => {
    if (aggr.length === 0 || aggr[aggr.length - 1].length >= 15) {
      aggr.push([cur]);
    } else {
      aggr[aggr.length - 1].push(cur);
    }
    return aggr;
  }, []);

  const [, drop] = useDrop({ accept: DraggableItems.ICON });
  const [, nextPageRef] = useDrop({
    accept: DraggableItems.ICON,
    hover: (): void => {
      if (canTriggerPageChange && panelIdx !== iconSet.length - 1) {
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

  const onIconHover = (id: string, targetId: string): void => {
    const curIconItem: ?IconItemType = iconItems.find(n => n.id === id);
    if (!curIconItem) return;

    const targetItem: ?IconItemType = iconItems.find(n => n.id === targetId);
    if (!targetItem) return;

    const targetIndex: number = iconItems.indexOf(targetItem);
    const newIconItems: IconItemArrayType = iconItems.filter(n => n.id !== id);
    newIconItems.splice(targetIndex, 0, curIconItem);
    setIconItems(newIconItems);
  };

  const getPanelHeight = (n: number): string => {
    if (n <= 5) return '33%';
    if (n <= 10) return '66%';
    return '100%';
  };

  const getIconHeight = (n: number): string => {
    if (n <= 5) return '100%';
    if (n <= 10) return '66%';
    return '33%';
  };

  return (
    <Box ref={drop} height="100%" position="relative">
      <Box ref={prevPageRef} position="absolute" top="0" bottom="0" left="-60px" width="30px" zIndex={3} />
      <Box ref={nextPageRef} position="absolute" top="0" bottom="0" right="-60px" width="30px" zIndex={3} />
      <Box overflow="hidden" width="100%" height="100%" display="flex">
        {iconSet.map((set, index) => (
          <Box key={`${index + 1}`} height="100%" width="100%" flex="1 0 100%">
            <Box
              display="flex"
              width="100%"
              flexWrap="wrap"
              flex="1 1 100%"
              height={getPanelHeight(set.length)}
              style={{ transform: `translateX(${panelIdx * -100}%)` }}
              className={styles.transition}
            >
              {set.map((item, i) => (
                <Box
                  key={item.id}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flex="0 1 20%"
                  width="20%"
                  height={getIconHeight(set.length)}
                  color={grey[50]}
                  spaces={spaces.sm}
                >
                  <DraggableIcon index={i} iconItem={item} onIconHover={onIconHover} />
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
