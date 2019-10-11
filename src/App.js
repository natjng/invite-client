import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import Login from './containers/Login';
import NavBar from './components/NavBar';
import Events from './components/Events';

class App extends React.Component {
  // move state here/use store
  // {this.state.loggedIn ? <NavBar /> : <Login />}
  
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Login />
          
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            <Route path="/events">
            <Events />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
