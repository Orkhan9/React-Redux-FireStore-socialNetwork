import React, {useState} from 'react';
import {Button, Container, Menu, MenuItem} from "semantic-ui-react";
import {NavLink,useHistory} from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";

const NavBar = ({setFormOpen}) => {
    const history=useHistory();
    const [authenticated,setAuthenticated]=useState(false);

    function handleSignOut(){
        setAuthenticated(false);
        history.push('/');
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <MenuItem as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="" style={{marginRight:15}} />
                    Re-vents
                </MenuItem>
                <MenuItem as={NavLink} to='/events' name='Events' />
                {authenticated &&
                <MenuItem as={NavLink} to='/createEvent' >
                    <Button positive inverted content='Create Event' />
                </MenuItem>}
                {authenticated
                    ? <SignedInMenu signOut={handleSignOut} />
                    : <SignedOutMenu setAuthenticated={setAuthenticated} />}


            </Container>
        </Menu>
    );
};

export default NavBar;