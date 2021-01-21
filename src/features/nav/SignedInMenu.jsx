import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Image,
  MenuItem,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {signOutFirebase} from "../../app/firestore/firebaseService";

const SignedInMenu = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();

 async function handleSignOut(){
     try{
         history.push('/');
         await signOutFirebase();
     }catch(error){
        toast.error(error.message);
     }
 }

  return (
    <MenuItem position='right'>
      <Image
        avatar
        spaced='right'
        src={currentUser.photoURL || "/assets/user.png"}
      />
      <Dropdown pointing='top left' text={currentUser.displayName}>
        <DropdownMenu>
          <DropdownItem
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <DropdownItem text='My profile' icon='user' />
          <DropdownItem as={Link} to='/account' text='My account' icon='settings' />
          <DropdownItem
            onClick={handleSignOut}
            text='Sign out'
            icon='power'
          />
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  );
};

export default SignedInMenu;
