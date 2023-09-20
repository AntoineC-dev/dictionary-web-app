import { ErrorDisplay, SearchField } from './components';
import { Navbar, SuccessDisplay } from './layouts';
import useStore from './stores/store';

function App() {
  const store = useStore((state) => state.store);
  return (
    <div className="app">
      <Navbar />
      <SearchField />
      {store.data && <SuccessDisplay {...store.data} />}
      {store.error && <ErrorDisplay {...store.error} />}
    </div>
  );
}

export default App;
