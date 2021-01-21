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
  const { currentUserProfile } = useSelector((state) => state.profile);
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
        src={currentUserProfile.photoURL || "/assets/user.png"}
      />
      <Dropdown pointing='top left' text={currentUserProfile.displayName}>
        <DropdownMenu>
          <DropdownItem
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <DropdownItem as={Link} to={`/profile/${currentUserProfile.id}`} text='My profile' icon='user' />
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
