import Navigation from './Navigation';

import Home from './Home';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import ToolsDetails from './ToolsDetails';
import CalendarDetails from './CalendarDetails';
function App() {
  const devToolsUrl = 'https://databaseofproject.onrender.com/devtoolslinks/';
  

  return (
    <Router>
      <div className="App">
        <Navigation/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path ="/calendar">
            <CalendarDetails/>
          </Route>
          <Route path ="/toolsdetails">
            <ToolsDetails url={devToolsUrl} heading="DevTools"/>
          </Route> 
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;