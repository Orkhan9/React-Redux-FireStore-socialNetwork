import React,{useState} from 'react';
import {Button, Form, FormField, Header, Segment} from "semantic-ui-react";
import cuid from "cuid";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateEvent,createEvent} from "../eventActions";

const EventForm = ({match,history}) => {
    const dispatch=useDispatch();

    const selectedEvent=useSelector(state=>state.event.events.find(e=>e.id===match.params.id));

    const initialValues=selectedEvent ?? {
        title:'',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''
    }

    const [values,setValues]=useState(initialValues);

    function handleSubmit(){
        selectedEvent
            ? dispatch(updateEvent({...selectedEvent,...values}))
            : dispatch(createEvent({...values,
                id:cuid(),
                hostedBy:'Bob',
                attendees:[],
                hostPhotoURL:'/assets/user.png'}));
        history.push('/events')
    }

    function handleInputChange(e){
        const {name,value}=e.target;
        setValues({...values,[name]:value});
    }

    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
            <Form onSubmit={handleSubmit}>
                <FormField>
                    <input type="text"
                           placeholder='Event title'
                           name='title'
                           value={values.title}
                           onChange={(e)=>handleInputChange(e)} />
                </FormField>
                <FormField>
                    <input type="text"
                           placeholder='Category'
                           name='category'
                           value={values.category}
                           onChange={(e)=>handleInputChange(e)} />
                </FormField>
                <FormField>
                    <input type="text"
                           placeholder='Description'
                           name='description'
                           value={values.description}
                           onChange={(e)=>handleInputChange(e)} />
                </FormField>
                <FormField>
                    <input type="text"
                           placeholder='City'
                           name='city'
                           value={values.city}
                           onChange={(e)=>handleInputChange(e)} />
                </FormField>
                <FormField>
                    <input type="text"
                           placeholder='Venue'
                           name='venue'
                           value={values.venue}
                           onChange={(e)=>handleInputChange(e)} />
                </FormField>
                <FormField>
                    <input type="date"
                           placeholder='Date'
                           name='date'
                           value={values.date}
                           onChange={(e)=>handleInputChange(e)} />
                </FormField>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button as={Link} to='/events'
                        type='submit'
                        floated='left'
                        content='Cancel' />
            </Form>
        </Segment>
    );
};

export default EventForm;