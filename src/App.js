import Navigation from './Navigation';

import Home from './Home';
function App() {
  

  return (

    <div className="App">
      <Navigation/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;