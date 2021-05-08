import React from "react";
import {
  StyledHeader,
  StyledHeaderControls,
  StyledHeaderLogo,
  StyledHeaderNavigation,
  StyledLogoPrimary,
  StyledLogoSecondary
} from "./StyledHeader";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAuthStage, setCurrentLogin} from "../../redux/auth/auth.actions";
import {AuthStages} from "../../core/constants/auth-stages.constants";

const Header = () => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    localStorage.removeItem('token');
    dispatch(setAuthStage(AuthStages.NOT_AUTHORIZED));
    dispatch(setCurrentLogin(''));
  };

  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <StyledLogoPrimary>Mus</StyledLogoPrimary>
        <StyledLogoSecondary>Cat</StyledLogoSecondary>
      </StyledHeaderLogo>
      <StyledHeaderNavigation>
        <NavLink to='/home/profile' activeClassName='active-link'>Profile</NavLink>
        <NavLink to='/home/search' activeClassName='active-link'>Search</NavLink>
        <NavLink to='/home/upload' activeClassName='active-link'>Upload</NavLink>
      </StyledHeaderNavigation>
      <StyledHeaderControls>
        <button type={"button"} className="btn btn-success" onClick={onLogOut}>Log Out</button>
      </StyledHeaderControls>
    </StyledHeader>
  );
};

export default Header;
