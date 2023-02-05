import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Find from './components/Find';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import RidesOffered from './components/RidesOffered';
import RidesRequested from './components/RidesRequested';
import SeatRequest from './components/SeatRequest';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/find">
          <Find/>
        </Route>
        <Route exact path = "/add">
          <Add/>
        </Route>
        <Route exact path = "/profile">
          <Profile/>
        </Route>
        <Route exact path = "/login">
          <Login/>
        </Route>
        <Route exact path = "/seat-request">
          <SeatRequest/>
        </Route>
        <Route exact path = "/rides-offered">
          <RidesOffered/>
        </Route>
        <Route exact path = "/seats-requested">
          <RidesRequested/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
