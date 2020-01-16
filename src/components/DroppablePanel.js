// @flow

import * as React from 'react';
import { useDrop } from 'react-dnd';
import css from 'classnames';

import DraggableIcon from './DraggableIcon';
import type { IconItemType } from '../types/IconItemType';
import DraggableItems from './DraggableItems';

import fetchIcon from '../utils/fetchIcon';
import styles from './DroppablePanel.module.scss';

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

  const getGridStyles = (n: number): string => {
    if (n <= 5) {
      return styles.oneRow;
    }

    if (n <= 10) {
      return styles.twoRow;
    }

    return styles.threeRow;
  };

  return (
    <div ref={drop} className={styles.container}>
      <div className={css(styles.iconPanel, getGridStyles(iconItems.length))}>
        {iconItems.map((item, i) => (
          <div className={styles.iconWrapper} key={item.id}>
            <DraggableIcon index={i} iconItem={item} onIconDrag={handleIconItemMove} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroppablePanel;
