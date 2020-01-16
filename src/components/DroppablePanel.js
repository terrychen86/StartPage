// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';
import { useDrop } from 'react-dnd';

import DraggableIcon from './DraggableIcon';
import type { IconItemType } from '../types/IconItemType';
import DraggableItems from './DraggableItems';

import fetchIcon from '../utils/fetchIcon';
import spaces from '../utils/spaces';

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
];

const DroppablePanel = (): React.Node => {
  const [iconItems, setIconItems] = React.useState<IconItemArrayType>(ICON_ITEMS);
  const [, drop] = useDrop({ accept: DraggableItems.ICON });

  const handleIconItemMove = (id: string, targetId: string): void => {
    const curIconItem: ?IconItemType = iconItems.find(n => n.id === id);
    if (!curIconItem) {
      return;
    }

    const targetItem: ?IconItemType = iconItems.find(n => n.id === targetId);
    if (!targetItem) {
      return;
    }

    const targetIndex: number = iconItems.indexOf(targetItem);

    const newIconItems: IconItemArrayType = iconItems.filter(n => n.id !== id);
    newIconItems.splice(targetIndex, 0, curIconItem);
    setIconItems(newIconItems);
  };

  const getPanelHeight = (n: number): string => {
    if (n <= 5) {
      return '33%';
    }

    if (n <= 10) {
      return '66%';
    }

    return '100%';
  };

  return (
    <Box ref={drop} height="100%">
      <Box display="flex" flexWrap="wrap" height={getPanelHeight(iconItems.length)}>
        {iconItems.map((item, i) => (
          <Box
            key={item.id}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex="0 1 20%"
            width="20%"
            height="33%"
            p={spaces.sm}
            color={grey[50]}
          >
            <DraggableIcon index={i} iconItem={item} onIconDrag={handleIconItemMove} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DroppablePanel;
