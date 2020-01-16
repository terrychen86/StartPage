// @flow

import * as React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import css from 'classnames';

import DraggableItems from './DraggableItems';
import type { IconItemType } from '../types/IconItemType';
import styles from './DraggableIcon.module.scss';

type Props = {|
  +index: number,
  +iconItem: IconItemType,
  +onIconDrag: (id: string, targetId: string) => void,
|};

const DraggableIcon = ({ index, iconItem, onIconDrag }: Props): React.Node => {
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

  return (
    <div className={css(isDragging && styles.dragging)} ref={node => drag(drop(node))}>
      {name}
    </div>
  );
};
export default DraggableIcon;
