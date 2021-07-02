import './App.css';
import {useSelector} from "react-redux";
import {Redirect, NavLink, Route, Switch, Link} from 'react-router-dom';
import {Weather} from "./Pages/weatherButton";
import {Time} from "./Pages/timePages";

const App = () => {

  const {value} = useSelector(({appReducer}) => appReducer)


  return (
    <div className="App">
      <h2>Hello, make a choice</h2>
      <div className='button-group'>
        <NavLink to={'/time'}>
          <button type="button" className="btn btn-light">
            <h2>Time</h2>
          </button>
        </NavLink>
        <NavLink to={'/weather'}>
          <button type="button" className="btn btn-primary">
            <h2>Weather</h2>
          </button>
        </NavLink>
      </div>

      <Switch>
        <Route exact path={'/time'} render={() => <Time/>}/>
        <Route exact path={'/weather'} render={() => <Weather/>}/>
      </Switch>

    </div>
  );
}

export default App;
