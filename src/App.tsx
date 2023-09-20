import * as React from 'react';

import { ErrorDisplay, SearchField } from './components';
import { Navbar, SuccessDisplay } from './layouts';
import { Store } from './types';

function App() {
  const [store, setStore] = React.useState<Store>({ data: null, error: null });

  return (
    <div className="app">
      <Navbar />
      <SearchField setStore={setStore} />
      {store.data && <SuccessDisplay {...store.data} />}
      {store.error && <ErrorDisplay {...store.error} />}
    </div>
  );
}

export default App;
