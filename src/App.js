import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/login';
import Authentication from './containers/authentication.HOC';

const Home = () => <div>Home</div>

const ProtectedHomepage = Authentication(Home);
const RedirectableLogin = Authentication(Login, true);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" component={ProtectedHomepage}/>
          <Route path='/login' component={RedirectableLogin}/>
        </Router>
      </div>
    </Provider>
    
  );
}

export default App;
