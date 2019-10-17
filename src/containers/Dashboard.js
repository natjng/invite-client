import React from 'react';
import { connect } from 'react-redux';
import {
    // BrowserRouter as Router,
    // Route,
    Link,
    // Switch
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello{this.props.currentUser.name ? `, ${this.props.currentUser.name} 👋` : <span role="img" aria-label="wave"> 👋</span>}</h2>
                <br />
                <Link to="/events/new" ><Button>+ Event</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    };
}

export default connect(mapStateToProps)(Dashboard);