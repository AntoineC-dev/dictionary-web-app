import * as React from 'react';

import styles from './App.module.css';
import { ErrorDisplay, SearchField } from './components';
import { Navbar, SuccessDisplay } from './layouts';
import { Store } from './types';

function App() {
  const [store, setStore] = React.useState<Store>({ data: null, error: null });

  return (
    <main className={styles.container}>
      <h1 className="sr-only">Dictionary Web App</h1>
      <Navbar />
      <SearchField setStore={setStore} />
      {store.data && (
        <div className={styles.successWrapper}>
          {store.data.map((props, index) => (
            <SuccessDisplay key={index} {...props} />
          ))}
        </div>
      )}
      {store.error && <ErrorDisplay {...store.error} />}
    </main>
  );
}

export default App;
