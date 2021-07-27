
//import './App.css';
import TopBar from './Components/TopBar/TopBar';
import Home from './pages/Home/Home'

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Setting from "./pages/Setting/Setting";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
    <TopBar/>
    <Switch>
    <Route exact path="/">
    <Home />
  </Route>
  <Route path="/posts">
    <Home />
  </Route>
  <Route path="/register">
    {currentUser ? <Home/> : <Register />}
  </Route>
  <Route path="/login">{currentUser ? <Home/> : <Login />}</Route>
  <Route path="/post/:id">
    <Single />
  </Route>
  <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
  <Route path="/settings">
    {currentUser ? <Setting/> : <Login />}
  </Route>
    
    </Switch>
  </Router>
  );
}

export default App;
