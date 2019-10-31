import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Shop from './containers/shop';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Shop/>
      </div>
    </Provider>
  );
}

export default App;
