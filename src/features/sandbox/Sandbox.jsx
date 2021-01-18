import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "semantic-ui-react";
import {increment, decrement} from "./testReducer";
import {openModal} from "../../app/common/modals/modalReducer";

const Sandbox = () => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.test.data);

    return (
        <>
            <h1>test 123</h1>
            <h3>the data id: {data}</h3>
            <Button onClick={()=>dispatch(increment(20))} content='Increment' color='green' />
            <Button onClick={()=>dispatch(decrement(10))} content='Decrement' color='red' />
            <Button onClick={()=>dispatch(openModal({modalType:'TestModal',modalProps:{data}}))}
                    content='Open Modal' color='teal' />
        </>
    );
};

export default Sandbox;