import Navigation from './Navigation';

import Home from './Home';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import ToolsDetails from './ToolsDetails';
import CalendarDetails from './CalendarDetails';
import InfoBar from './InfoBar';
function App() {
  const image = 'https://i.ibb.co/zHJ4nL7/Hydro74.jpg';
    
  const devToolsUrl = 'https://databaseofproject.onrender.com/devtoolslinks/';
  const quickLinksUrl = 'https://databaseofproject.onrender.com/QuickLinks/';
  const codeLinksUrl = 'https://databaseofproject.onrender.com/CodeLinks/';

  return (
    <Router>
      <div className="App">
        <InfoBar image_link={image}/>
        <Navigation/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path ="/calendar">
            <CalendarDetails/>
          </Route>
          <Route path ="/devtools">
            <ToolsDetails url={devToolsUrl} heading="DevTools"/>
          </Route> 
          <Route path ="/quicklinks">
            <ToolsDetails url={quickLinksUrl} heading="Quick-Links"/>

          </Route>
          <Route path ="/codelinks">
            <ToolsDetails url={codeLinksUrl} heading="CodingLinks"/>
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;