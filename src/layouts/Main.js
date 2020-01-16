// @flow

import * as React from 'react';
import styles from './Main.module.scss';
import DroppablePanel from '../components/DroppablePanel';
import background from '../images/background.jpg';

const Main = (): React.Node => {
  return (
    <main className={styles.fullScreenWrapper}>
      <div className={styles.bg}>
        <img alt="bg" src={background} className={styles.bgImg} />
      </div>
      <div className={styles.container}>
        <DroppablePanel />
      </div>
    </main>
  );
};

export default Main;
