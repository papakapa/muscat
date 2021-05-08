import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentLogin, getCurrentUser} from "../../redux/auth/auth.selectors";
import {getUserAPI} from "../../redux/auth/auth.actions";

const Profile = () => {
  const dispatch = useDispatch();
  const currentLogin = useSelector(getCurrentLogin);
  const user = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(getUserAPI(currentLogin));
  }, [dispatch, currentLogin]);

  return (
    <div>
      <div>
        {user.login}
      </div>
      <div>
        {user.firstName}
      </div>
      <div>
        {user && user.secondName}
      </div>
      <div>
        {user && user.email}
      </div>
    </div>
  );
};

export default Profile;
