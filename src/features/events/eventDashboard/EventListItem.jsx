import React from 'react';
import {
    Button,
    Icon,
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemHeader,
    ItemImage, Label, List,
    Segment,
    SegmentGroup
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import {Link} from "react-router-dom";
import {format} from 'date-fns';
import {deleteEventInFirestore} from "../../../app/firestore/firestoreService";

const EventListItem = ({event}) => {
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <ItemImage size='tiny' circular src={event.hostPhotoURL} />
                        <ItemContent>
                            <ItemHeader content={event.title} />
                            <ItemDescription>
                                hosted by {event.hostedBy}
                            </ItemDescription>
                            {event.isCancelled && (
                                <Label
                                    style={{top: '-40px'}}
                                    ribbon='right'
                                    color='red'
                                    content='This event has been cancelled'
                                />
                            )}
                        </ItemContent>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format( event.date,'MMMM d,yyyy h:mm a')}
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee=>(
                        <EventListAttendee attendee={attendee} key={attendee.id} />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button onClick={()=>deleteEventInFirestore(event.id) }
                        color='red'
                        floated='right'
                        content='Delete' />
                <Button as={Link} to={`/events/${event.id}`}
                        color='teal'
                        floated='right'
                        content='View' />
            </Segment>
        </SegmentGroup>
    );
};

export default EventListItem;