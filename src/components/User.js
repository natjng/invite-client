import React from 'react';

class User extends React.Component {
    render() {        
        return(
            <div className="user-profile" >
                {this.props.currentUser ? <><h2>Profile</h2><p>Name: {this.props.currentUser.name}</p><p>Email: {this.props.currentUser.email}</p>Edit</> : 'no user'}
            </div>
        )
    }
}

export default User;


// {this.props.currentUser ? (<div><h2>Profile</h2>
//     <p>Name: {this.props.currentUser.name}</p>
//     <p>Email: {this.props.currentUser.email}</p></div>) : ''}

// make separate components for events and hosted events
// props.events/store.events.map if events : "You don't have any events."
// props.hosted_events/store.hosted_events.map if hosted_events : "You're not hosting any events."}"