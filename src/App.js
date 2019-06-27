import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path='/login' component={Login}/>
        </Router>
      </div>
    </Provider>
    
  );
}

export default App;
