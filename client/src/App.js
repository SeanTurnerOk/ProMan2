import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './views/Details';
import Main from './views/Main';
import Edit from './views/Edit';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
