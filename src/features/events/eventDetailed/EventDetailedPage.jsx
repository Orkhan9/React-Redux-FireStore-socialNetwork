import React from 'react';
import {Grid, GridColumn} from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSideBar from "./EventDetailedSideBar";
import {useDispatch, useSelector} from "react-redux";
import useFirestoreDoc from "../../../app/hooks/useFirestoreDoc";
import {listenToEvents} from "../eventActions";
import {listenToEventFromFirestore} from "../../../app/firestore/firestoreService";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {Redirect} from 'react-router-dom';

const EventDetailedPage = ({match}) => {
    const dispatch=useDispatch();
    const event = useSelector(state => state.event.events.find(e => e.id === match.params.id));
    const {loading,error} = useSelector((state) => state.async)

    useFirestoreDoc({
        query: () => listenToEventFromFirestore(match.params.id),
        data: event => dispatch(listenToEvents([event])),
        deps: [match.params.id,dispatch]
    })

    if(loading || (!event && !error)) return <LoadingComponent content='Loading event...' />

    if(error) return <Redirect to='/error' />

    return (
        <Grid>
            <GridColumn width={10}>
                <EventDetailedHeader event={event}/>
                <EventDetailedInfo event={event}/>
                <EventDetailedChat/>
            </GridColumn>
            <GridColumn width={6}>
                <EventDetailedSideBar attendees={event?.attendees}/>
            </GridColumn>
        </Grid>
    );
};

export default EventDetailedPage;