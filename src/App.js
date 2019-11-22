import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  // useRouteMatch,
  // useParams
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import EventsContainer from './containers/EventsContainer';
import EventInput from './components/EventInput';
import Events from './components/Events';
import User from './components/User';
import { connect } from 'react-redux';
import { getEvents } from './actions/eventActions';
import UserInput from './components/UserInput';

class App extends React.Component {

  showNavBar = () =>  {
    if (this.props.currentUser.id) {
      return <NavBar />
    }
  }
  
  componentDidMount() {
    console.log('a, 1');
    
    this.props.getEvents();

    console.log('b, 3');
  }

  hostingEvents = () => {
    return this.props.events.all.filter(event => event.attributes.host.id === parseInt(this.props.currentUser.id, 10))
  }

  attendingEvents = () => {
    let events = [];
    this.props.events.all.filter(event => {
      if (event.attributes.guests.length) {
        const eventGuestsIds = event.attributes.guests.map(g => g.id)
        if (eventGuestsIds.find(id => id === parseInt(this.props.currentUser.id, 10))) {
          events.push(event)
        }
      } 
    })
    return events;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">
            <header className="App-header">
              Invite
            </header>
          </Link>
          {this.showNavBar()}
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/events/new">
              <EventInput />
            </Route>
            <Route exact path="/events/attending">
              <Events events={this.attendingEvents()} />
            </Route>
            <Route exact path="/events/hosting">
              <Events events={this.hostingEvents()} />
            </Route>
            <Route path="/events">
              {this.props.currentUser.id ? <EventsContainer /> : ''}
              <Events events={this.props.events.all} />
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
    currentUser: state.currentUser,
    events: state.events,
  };
}

const mapDispatchToProps = dispatch => {
  return {
      getEvents: () => dispatch(getEvents()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
