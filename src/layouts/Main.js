// @flow

import * as React from 'react';
import styles from './Main.module.scss';
import DroppablePanel from '../components/DroppablePanel';

const Main = (): React.Node => {
  return (
    <main className={styles.fullScreenWrapper}>
      <div className={styles.container}>
        <DroppablePanel />
      </div>
    </main>
  );
};

export default Main;
