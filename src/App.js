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
import NavBar from './components/NavBar';
import Login from './containers/Login';
import Home from './containers/Home';
import Events from './components/Events';
import User from './components/User';
import { connect } from 'react-redux';

class App extends React.Component {
  // move state here/use store
  // {this.state.loggedIn ? <NavBar /> : <Login />}
  
  render() {
    console.log('App.js Store state', this.props);
    
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Login />
          <User />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/users/6">
              <User currentUser={this.props.currentUser} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(App);

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
