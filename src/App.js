// @flow

import * as React from 'react';
import { useSelector } from 'react-redux'
import { renderPage } from './routes/routes';
import styles from './App.module.scss';

const App = (): React.Node => {
  const routes = useSelector(state => state.routes);
  const { route } = routes;

  return (
    <div className={styles.appContainer}>
      <main>
        {renderPage(route)}
      </main>
    </div>
  );
};


export default App;
