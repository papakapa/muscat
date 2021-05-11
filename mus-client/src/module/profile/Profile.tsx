import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentLogin, getCurrentUser} from "../../redux/auth/auth.selectors";
import {getUserAPI} from "../../redux/auth/auth.actions";
import Track from "../track/components/Track";
import {
  StyledBasicData,
  StyledBasicEdit,
  StyledBasicField,
  StyledBasicHeader,
  StyledBasicLabel,
  StyledBasicText,
  StyledBasicWrapper,
  StyledProfile,
  StyledProfileTracks
} from "./StyledProfile";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const currentLogin = useSelector(getCurrentLogin);
  const user = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(getUserAPI(currentLogin));
  }, [dispatch, currentLogin]);

  const rerenderTracks = useCallback(() => {
    if (user && user.tracks) {
      if (user.tracks.length) {
        return user.tracks.map(el => <Track track={el} order={user.tracks} key={el._id + 'user'}/>);
      }
      return null;
    }
    return null;
  }, [user]);

  return (
    <StyledProfile>
      <StyledBasicWrapper>
        <StyledBasicHeader>
          Basic Data:
        </StyledBasicHeader>
        <StyledBasicData>
          <StyledBasicField>
            <StyledBasicLabel>Login: </StyledBasicLabel>
            <StyledBasicText>{user.login}</StyledBasicText>
          </StyledBasicField>
          <StyledBasicField>
            <StyledBasicLabel>First Name: </StyledBasicLabel>
            <StyledBasicText>{user.firstName}</StyledBasicText>
          </StyledBasicField>
          <StyledBasicField>
            <StyledBasicLabel>Second name: </StyledBasicLabel>
            <StyledBasicText>{user && user.secondName}</StyledBasicText>
          </StyledBasicField>
          <StyledBasicField>
            <StyledBasicLabel>Email: </StyledBasicLabel>
            <StyledBasicText>{user && user.email}</StyledBasicText>
          </StyledBasicField>
        </StyledBasicData>
        <StyledBasicEdit>
          <p>Want to <NavLink to={'/home/updateUser'}>edit</NavLink> profile ?</p>
        </StyledBasicEdit>
      </StyledBasicWrapper>
      <StyledProfileTracks>
        {rerenderTracks()}
      </StyledProfileTracks>
    </StyledProfile>
  );
};

export default Profile;
