import React from 'react';
import EventPreview from './EventPreview';

class Events extends React.Component {
    render() {
        
        const showEvents = this.props.events.map(e => <EventPreview key={e.id} event={e} />)

        return (
            <div className="events-container">
                {showEvents}
            </div>
        )
    }
}

export default Events;
