import React from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <PostForm/>
          <Posts/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
