import React from 'react';
import {Grid, GridColumn} from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSideBar from "./EventDetailedSideBar";
import {useSelector} from "react-redux";

const EventDetailedPage = ({match}) => {
    const event=useSelector(state=>state.event.events.find(e=>e.id===match.params.id));
    return (
        <Grid>
            <GridColumn width={10}>
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event} />
                <EventDetailedChat />
            </GridColumn>
            <GridColumn width={6}>
                <EventDetailedSideBar attendees={event.attendees} />
            </GridColumn>
        </Grid>
    );
};

export default EventDetailedPage;