import './App.scss';
import { Route, Switch } from 'react-router-dom';

// pages
import Home from './Pages/Home';
import Forecast from './Pages/Forecast';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/current-weather' component={Forecast}/>
            {/* <Route exact path='/error' component={ErrorDisplay}/> */}
        </Switch>
    </div>
  );
}

export default App;
