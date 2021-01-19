import {BrowserRouter as Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './Screens/Home';
import ConfigState from './context/configGeneral/configState';
import NewState from './context/new/newState';
import ProgramState from './context/programs/programState';
import MenuState from './context/menu/menuState';
import EventState from './context/events/eventState';
function App() {
  return (
    <div>
      <ConfigState>
        <NewState>
          <ProgramState>
            <MenuState>
              <EventState>
                <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                </Switch>
              </EventState>
            </MenuState>
          </ProgramState>
        </NewState>
      </ConfigState>
    </div>
  );
}

export default App;
