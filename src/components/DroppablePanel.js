// @flow

import * as React from 'react';
import { useDrop } from 'react-dnd';

import DraggableIcon from './DraggableIcon';
import type { IconItemType } from '../types/IconItemType';
import DraggableItems from './DraggableItems';

import styles from './DroppablePanel.module.scss';

type IconItemArrayType = Array<IconItemType>;

// TODO: move to data layer
const ICON_ITEMS: IconItemArrayType = [
  {
    id: '1',
    name: 'Google',
    url: '',
    iconUrl: '',
  },
  {
    id: '2',
    name: 'Gmail',
    url: '',
    iconUrl: '',
  },
  {
    id: '3',
    name: 'Youtube',
    url: '',
    iconUrl: '',
  },
  {
    id: '4',
    name: 'Facebook',
    url: '',
    iconUrl: '',
  },
  {
    id: '5',
    name: 'LinkedIn',
    url: '',
    iconUrl: '',
  },
  {
    id: '6',
    name: 'Instagram',
    url: '',
    iconUrl: '',
  },
  {
    id: '7',
    name: 'Github',
    url: '',
    iconUrl: '',
  },
  {
    id: '8',
    name: 'Amazon',
    url: '',
    iconUrl: '',
  },
  {
    id: '9',
    name: 'Medium',
    url: '',
    iconUrl: '',
  },
  {
    id: '10',
    name: 'Google Doc',
    url: '',
    iconUrl: '',
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

  return (
    <>
      <div ref={drop} className={styles.container}>
        {iconItems.map((item, i) => (
          <div className={styles.iconWrapper} key={item.id}>
            <DraggableIcon index={i} iconItem={item} onIconDrag={handleIconItemMove} />
          </div>
        ))}
      </div>
    </>
  );
};

export default DroppablePanel;
