import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../../redux/auth/auth.selectors";
import {useForm} from "react-hook-form";
import { updateUserAPI } from "../../redux/auth/auth.actions";
import { StyledUpdateProfile } from "./StyledUpdateProfile";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const {handleSubmit, register} = useForm({
    defaultValues: {
      firstName: currentUser.firstName,
      secondName: currentUser.secondName,
      email: currentUser.email,
      login: currentUser.login,
    }
  });

  const handleUpdate = (data: any) => {
    const updatedUser = {
      _id: currentUser._id,
      tracks: currentUser.tracks,
      firstName: data.firstName ? data.firstName : currentUser.firstName,
      secondName: data.secondName ? data.secondName : currentUser.secondName,
      login: data.login ? data.login : currentUser.login,
      email: data.email ? data.email : currentUser.email,
      password: data.newPassword ? data.newPassword : currentUser.password,
    };
    dispatch(updateUserAPI(updatedUser));
  }

  return (
    <StyledUpdateProfile>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="mb-3">
          <label htmlFor="secondName" className="form-label">Second name</label>
          <input
            type="text"
            className="form-control"
            id="secondName"
            name='secondName'
            ref={register}
            autoComplete='off'
            placeholder="Enter new second name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name='firstName'
            ref={register}
            autoComplete='off'
            placeholder="Enter new first name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="login" className="form-label">Login</label>
          <input
            type="text"
            className="form-control"
            id="login"
            name='login'
            ref={register}
            autoComplete='off'
            placeholder="Enter new login"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">EMail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name='email'
            ref={register}
            autoComplete='off'
            placeholder="Enter new email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            name='newPassword'
            ref={register}
            autoComplete='off'
            placeholder="Enter new password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Old password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name='password'
            ref={register({
              required: true,
              validate: value => value === currentUser.password
            })}
            autoComplete='off'
            placeholder="Enter old password"
          />
        </div>
        <button type="submit" className="btn btn-success">Update</button>
      </form>
    </StyledUpdateProfile>
  );
};

export default UpdateProfile;