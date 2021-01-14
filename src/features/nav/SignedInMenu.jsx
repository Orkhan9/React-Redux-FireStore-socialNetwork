import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, Image, MenuItem} from "semantic-ui-react";
import {Link} from "react-router-dom";

const SignedInMenu = ({signOut}) => {
    return (
        <MenuItem position='right'>
            <Image avatar spaced='right' src='/assets/user.png' />
            <Dropdown pointing='top left' text='Bob'>
                <DropdownMenu>
                    <DropdownItem as={Link} to='/createEvent'
                    text='Create Event' icon='plus' />
                    <DropdownItem text='My profile' icon='user' />
                    <DropdownItem onClick={signOut} text='Sign out' icon='power' />
                </DropdownMenu>
            </Dropdown>
        </MenuItem>
    );
};

export default SignedInMenu;