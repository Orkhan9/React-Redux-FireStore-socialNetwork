import React from 'react';
import EventListItem from "./EventListItem";

const EventList = ({events,selectEvent,deleteEvent}) => {
    return (
        <>
            {events.map(event=>(
                <EventListItem event={event}
                               selectEvent={selectEvent}
                               deleteEvent={deleteEvent}
                               key={event.id} />
            ))}
        </>
    );
};

export default EventList;