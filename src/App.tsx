import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePart from './pages/CreatePart';
import Home from './pages/Home';
import Header from './components/Header';
import Store from './lib/store';
import Reducer from './store/reducer'; 
import addPartAction from './store/actions';

function App() {
  const store = new Store(Reducer, {});
  console.log(store.value);
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreatePart} />
        </div>
      </div>
    </Router>
  );
}

export default App;
