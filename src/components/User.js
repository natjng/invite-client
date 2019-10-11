import React from 'react';
import { connect } from 'react-redux';

class User extends React.Component {
    render() {
        return (
            <div>
                {/* {props.user.name ? <h2>Name: {props.user.name}</h2> : ""}<br/>
                Email: {props.user.email} */}
                <p>Name: {this.props.user.name}</p>
                <p>Email: {this.props.user.email}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(User);

// make separate components for events and hosted events
// props.events/store.events.map if events : "You don't have any events."
// props.hosted_events/store.hosted_events.map if hosted_events : "You're not hosting any events."}"