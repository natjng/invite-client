import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  // useRouteMatch,
  // useParams
} from 'react-router-dom';
import NavBar from './components/NavBar';
import UserContainer from './containers/UserContainer';
import EventsContainer from './containers/EventsContainer';
// import Home from './containers/Home';
// import Events from './components/Events';
import User from './components/User';
import { connect } from 'react-redux';
import { getEvents } from './actions/eventActions';
import UserInput from './components/UserInput';

class App extends React.Component {
  // move state here/use store
  // {this.props.currentUser ? <NavBar /> : <Login />}
  
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    // console.log('App.js Store state', this.props);
    return (
      <Router>
        <div className="App">
          <NavBar />
          <UserContainer />
          

          <Switch>
            <Route exact path="/">
              {/* <Home /> */}
            </Route>
            <Route path="/events">
              <EventsContainer />
            </Route>
            <Route exact path="/profile">
              <User />
            </Route>
            <Route exact path="/profile/edit">
              <UserInput />
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

const mapDispatchToProps = dispatch => {
  return {
      getEvents: () => dispatch(getEvents()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

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
