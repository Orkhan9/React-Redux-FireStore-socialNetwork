import React from 'react';
import {Button, MenuItem} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {openModal} from "../../app/common/modals/modalReducer";

const SignedOutMenu = () => {
    const dispatch = useDispatch();
    return (
        <MenuItem position='right'>
            <Button onClick={() => dispatch(openModal({modalType: 'LoginForm'}))}
                    basic inverted content='Login'/>
            <Button basic inverted
                    content='Register'
                    style={{marginLeft: '0.5em'}}/>
        </MenuItem>
    );
};

export default SignedOutMenu;