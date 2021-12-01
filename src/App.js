import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import IndexContainer from './pages/indexContainer';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <IndexContainer />
      </Provider>
    </div>
  );
}

export default App;
