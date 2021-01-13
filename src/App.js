import {BrowserRouter as Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './Screens/Home';
import ConfigState from './context/configGeneral/configState';
import NewState from './context/new/newState';
function App() {
  return (
    <div>
      <ConfigState>
        <NewState>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </NewState>
      </ConfigState>
    </div>
  );
}

export default App;
