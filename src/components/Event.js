import React from 'react';
import Card from 'react-bootstrap/Card';

const Event = ({ event, updateEvent }) => {
    return (
        <Card>
            {event.name}
            {event.date ? ` | ${event.date}` : ''}
        </Card>
    )
}

export default Event;