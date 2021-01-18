import React from 'react';
import {Button, Container, Menu, MenuItem} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import {useSelector} from "react-redux";

const NavBar = () => {
    const {authenticated}=useSelector(state=>state.auth);

    return (
        <Menu inverted fixed='top'>
            <Container>
                <MenuItem as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="" style={{marginRight:15}} />
                    Re-vents
                </MenuItem>
                <MenuItem as={NavLink} to='/events' name='Events' />
                <MenuItem as={NavLink} to='/sandbox' name='Sandbox' />
                {authenticated &&
                <MenuItem as={NavLink} to='/createEvent' >
                    <Button positive inverted content='Create Event' />
                </MenuItem>}
                {authenticated
                    ? <SignedInMenu />
                    : <SignedOutMenu />}
            </Container>
        </Menu>
    );
};

export default NavBar;