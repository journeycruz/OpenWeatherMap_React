import "./Styles/App.scss";
import { Route, Switch } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Forecast from "./Pages/Forecast";
import ErrorPage from "./Pages/Error";
import { Loading } from "./Components/Loading";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/weather-dashboard' component={Forecast} />
        <Route exact path='/error' component={ErrorPage} />
        <Route exact path='/loading' component={Loading} />
      </Switch>
    </div>
  );
}

export default App;
