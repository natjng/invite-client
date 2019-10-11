import React from 'react';

const User = (props) => {
    return (
        <div>
            {props.user.name ? <h2>Name: {props.user.name}</h2> : ""}<br/>
            Email: {props.user.email}
        </div>
    )
}

export default User;

// make separate components for events and hosted events
// props.events/store.events.map if events : "You don't have any events."
// props.hosted_events/store.hosted_events.map if hosted_events : "You're not hosting any events."}"